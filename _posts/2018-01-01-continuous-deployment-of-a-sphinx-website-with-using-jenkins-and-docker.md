---
layout: post
title:  "Continuous deployment of a Sphinx website using Jenkins and Docker"
date:   2018-01-01
published: true
categories:
  - continuous deployment
  - sphinx
  - jenkins
  - web development
---

If you have ever set up a [sphinx](http://www.sphinx-doc.org/en/stable/) project you have probably reached the point where you want to start automating the build and deploy part of the creation process. This can be done several ways, but I chose git hooks going into a [Jenkins](https://jenkins-ci.org/) pipeline using [Docker](https://www.docker.com/) agents. I am also doing this as a single branch deploy using the **master** branch, how you get your source onto **master** is up to you.

Jenkins pipelines allow to script a build process, from setting up the environment to deploying assets. The main tasks of this sphinx build pipeline are to:
1. Run the environment.
2. Pull the latest source code.
3. Install the latest dependencies.
4. Build the sphinx site.
5. Deploy the generated HTML.

## Preparation

As mentioned, sphinx is a documentation generator written in Python. So it made sense to use ``requirements.txt`` to define the dependencies and a virtual environment to install them in. I also put all of my source documents (including **conf.py**) into a directory called ``source`` to keep them separate from the build files.

```
.
├── Dockerfile
├── Jenkinsfile
├── requirements.txt
├── rsync-exclude.txt
└── source
    ├── conf.py
    ├── _static
    └── index.rst
```

Before you start, you will also need to hook in your SCM (source control manager) into Jenkins as well as install and configure some plugins.

Jenkins Plugins Required:

* [Docker Plugin](https://plugins.jenkins.io/docker-plugin)
* [SSH Agent Plugin](https://plugins.jenkins.io/ssh-agent)

> **Note:** I won't be covering that part here, but will try to in future writings.
{: {{site.data.css.info-box}} }

## Building the pipeline

The build environment is created using the **Dockerfile** that is stored in the repo. This file isn't expected to change often, but modifications can be made over time. It can also be used for similar, yet customized, sphinx jobs with little overhead.

```bash
FROM debian

RUN apt-get update && apt-get install -y \
    rsync \
    openssh-client \
    python \
    python-pip \
    texlive

RUN pip install virtualenv

CMD ["/bin/bash"]
```

The **Dockerfile** is referenced in a **Jenkinsfile**, also stored in the repo, that defines the pipeline process. The parts of the environment that are more likely to change are built out in his file, and the build files it references.

```groovy
pipeline {
    agent {
        dockerfile {
          filename "Dockerfile"
          args "-u root" //needed to get around permission issues
        }
    }
    environment {
        BUILD_DIR   = './_built'
        SOURCE_DIR  = './source'
        DEPLOY_HOST = 'deployer@www.example.com:/path/to/docs/'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                // virtualenv may not be necessary with root,
                // but I still think it's a good idea.
                sh '''
                   virtualenv pyenv
                   . pyenv/bin/activate
                   pip install -r requirements.txt
                '''
            }
        }
        stage('Build') {
            steps {
                // clear out old files
                sh 'rm -rf ${BUILD_DIR}'
                sh 'rm -f ./sphinx-build.log'

                sh '''
                   ${WORKSPACE}/pyenv/bin/sphinx-build \
                   -q -w ./sphinx-build.log \
                   -b html \
                   -d ${BUILD_DIR}/doctrees ${SOURCE_DIR} ${BUILD_DIR}
                '''
            }
            post {
                failure {
                    sh 'cat ./sphinx-build.log'
                }
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials: ['deployer']) {
                   sh '''#!/bin/bash
                      rm -f ./rsync.log
                      RSYNCOPT=(-aze 'ssh -o StrictHostKeyChecking=no')
                      rsync "${RSYNCOPT[@]}" \
                      --exclude-from=./rsync-exclude.txt \
                      --log-file=./rsync.log \
                      --delete \
                      ${BUILD_DIR}/ ${DEPLOY_HOST}
                    '''
                }
            }
            post {
                failure {
                    sh 'cat ./rsync.log'
                }
            }
        }
    }
}
```

> **Note:** If you see anything that's wrong or missing with this post, please
[open an issue](https://github.com/jdillard/jdillard.github.io/issues) or
[create a pull request](https://github.com/jdillard/jdillard.github.io/pulls) so
it can be improved.
{: {{site.data.css.info-box}} }
