---
layout: post
title:  "Continuous deployment of a Sphinx website using Jenkins and Docker"
date:   2018-01-01
published: true
comment_issue_id: 4
categories:
  - continuous deployment
  - sphinx
  - jenkins
  - web development
---

If you have ever set up a [sphinx](http://www.sphinx-doc.org/en/stable/) project
you have probably reached the point where you want to start automating the build
and deploy part of the creation process. This can be done several ways, but I
chose git hooks going into a [Jenkins](https://jenkins-ci.org/) pipeline using
[Docker](https://www.docker.com/) agents. I am also doing this as a single
branch deploy using the **master** branch, how you get your source onto
**master** is up to you.

Jenkins pipelines allow for scripting of the build process, from setting up the
environment to deploying assets. The main tasks of this sphinx build pipeline
are to:

1. **Boot** the environment.
2. **Pull** the latest source code.
3. **Install** the latest dependencies.
4. **Build** the sphinx site.
5. **Deploy** the generated HTML.

> **Side Note:** To see a live example of a sphinx site using continuous deployment
  and integration with Travis-CI and Netlify, check out the
  [continuous-sphinx](https://github.com/jdillard/continuous-sphinx) repo.
{: {{site.data.css.tip-box}} }

## Preparation

As mentioned, sphinx is a documentation generator written in Python. So it made
sense to use ``requirements.txt`` to define the dependencies and a virtual
environment to install them in. I also put all of my source documents (including
**conf.py**) into a directory called ``source`` to keep them separate from the
build files.

```
.
├── .dockerignore
├── Dockerfile
├── Jenkinsfile
├── requirements.txt
├── rsync-exclude.txt
└── source
    ├── conf.py
    ├── _static
    └── index.rst
```

Before you start, you will also need to hook in your SCM (source control
manager) into Jenkins as well as install and configure some plugins. You will
also need an external Docker host or to install it locally.

Jenkins Plugins Required:

* [Docker Plugin](https://plugins.jenkins.io/docker-plugin)
* [SSH Agent Plugin](https://plugins.jenkins.io/ssh-agent)

> **Note:** I won't be covering that part here, but will try to in future writings.
{: {{site.data.css.info-box}} }

## Building the pipeline

The build environment is created using the **Dockerfile** that is stored in the
repo. This file isn't expected to change often, but modifications can be made
over time. It can also be used for similar, yet customized, sphinx jobs with
little overhead.

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

To prevent the `docker build` process from including the repo's unnecessary
files in the build process, add a **.dockerignore** with the following:

```
# ignore all unnecessary files
**
```

The **Dockerfile** is referenced in a **Jenkinsfile**, also stored in the repo,
that defines the pipeline process. The parts of the environment that are more
likely to change are built out in this file, and the build files it references.

```groovy
pipeline {
    agent {
        dockerfile {
          filename "Dockerfile"
          args "-u root" //needed to get around permission issues
        }
    }
    environment {
        SPHINX_DIR  = '.'
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
                   pip install -r ${SPHINX_DIR}/requirements.txt
                '''
            }
        }
        stage('Build') {
            steps {
                // clear out old files
                sh 'rm -rf ${BUILD_DIR}'
                sh 'rm -f ${SPHINX_DIR}/sphinx-build.log'

                sh '''
                   ${WORKSPACE}/pyenv/bin/sphinx-build \
                   -q -w ${SPHINX_DIR}/sphinx-build.log \
                   -b html \
                   -d ${BUILD_DIR}/doctrees ${SOURCE_DIR} ${BUILD_DIR}
                '''
            }
            post {
                failure {
                    sh 'cat ${SPHINX_DIR}/sphinx-build.log'
                }
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials: ['deployer']) {
                   sh '''#!/bin/bash
                      rm -f ${SPHINX_DIR}/rsync.log
                      RSYNCOPT=(-aze 'ssh -o StrictHostKeyChecking=no')
                      rsync "${RSYNCOPT[@]}" \
                      --exclude-from=${SPHINX_DIR}/rsync-exclude.txt \
                      --log-file=${SPHINX_DIR}/rsync.log \
                      --delete \
                      ${BUILD_DIR}/ ${DEPLOY_HOST}
                    '''
                }
            }
            post {
                failure {
                    sh 'cat ${SPHINX_DIR}/rsync.log'
                }
            }
        }
    }
}
```

## Troubleshooting tips

Chances are you aren't going to nail it on the first try, so here are some tips
to help you get through:

On the Jenkins host, run ``docker images`` to see a list of images that have
been created by Jenkins jobs. Any time a change is made to the **Dockerfile**
and it needs to rebuild, you will have to delete the now unused image with
``docker rmi <image_id>``.

---

After you have a successful run of you pipeline, you can go to the build URL in
Jenkins and use the **Replay** option. This option allows you edit the
**Jenkinsfile** locally and rerun it on the same hook event instead of
troubleshooting through a stream of commits. Once you have what you need
working, you can commit changes to the **Jenkinsfile** in a planned manner.

---

Make sure to turn on log rotation for each pipeline and discard old builds,
otherwise you'll end up with a surprise later.

{% include feedback.html %}
