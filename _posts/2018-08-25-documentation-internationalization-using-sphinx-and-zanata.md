---
layout: post
title:  "Documentation Internationalization using Sphinx and Zanata"
date:   2018-08-25
published: true
categories:
  - internationalization
  - sphinx
  - zanata
---

One of the great things about [Sphinx](http://www.sphinx-doc.org/en/stable/), is
that it natively provides [internationalization (i18n)](http://www.sphinx-doc.org/en/master/intl.html)
mechanisms to facilitate translation using the common `gettext` method. The
gettext files can be translated a number of different ways, but I have had
great results using [Zanata](http://zanata.org/), a separate open source project
that facilitates community driven translation. Reguardless of how you translate
the files, the process should end up being pretty similar.

The process of how sphinx and Zanata work together is summed up the chart below:

![Sphinx translation flow](/assets/images/posts/sphinx-translation-flow.svg) <small><i>The sphinx tranlation process using `gettext` and `zanata-cli`.</i></small>

## Preparation

A fairly common convention is to create a seperate repo where the internationalization
process takes place. This usually means [creating a submodule](https://chrisjean.com/git-submodules-adding-using-removing-and-updating/)
for the main documentation source repo, the **docs** directory in this case, or
tying to the original sources repo using another method.

For the purposes of the article, the structure of the internationalization repo
is shown below. The configuration section will cover what each of the files and
folders are for.

```
.
├── build.sh
├── zanata.xml
├── templates
├── locales
│   └── LC_MESSAGES
│       ├── de_DE
│       └── es
└── docs (submodule or similar)
    └── source
        ├── conf.py
        ├── _static
        └── index.rst
```

To prepare the Zanata side of things, you will need to [sign up](https://translate.zanata.org/)
for an account on their site, [create a new project](http://docs.zanata.org/en/release/user-guide/projects/create-project/),
and a project version. The project version will be the area of Zanata that you
give access to translators and translation reviewers.

{: {{site.data.css.tip-box}} }
> **Tip:** I use `master` or `latest` for my project version, but any convention
> works. It's also possible to have multiple versions to match the different
> versions of your documentation.

Finally, in order to easily sync translations with Zanata using the command
line, you will need to install the [Zanata CLI client](http://docs.zanata.org/en/release/client/).

## Configuration

The sphinx **conf.py** value that holds the path of the directory containing the
**.po** files might need to be changed from it's default depending on your
repo's folder structure. In order to keep the translation files separate from
source, we'll use:

```python
locale_dirs = ['../locales'] # relative to source directory
```

Next, configure authentication for `zanata-cli` by creating [zanata.ini](http://docs.zanata.org/en/release/client/configuration/)
and also configure access to the project version by creating [zanata.xml](http://docs.zanata.org/en/release/client/configuration/).

An example **zanata.xml**, once configured, would look something like:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<config xmlns="http://zanata.org/namespace/config/">
  <url>https://translate.zanata.org/</url>
  <project>my-docs-project</project>
  <project-version>latest</project-version>
  <project-type>gettext</project-type>
  <src-dir>templates</src-dir>
  <trans-dir>locales</trans-dir>
  <rules>
    <rule pattern="**/*.pot">{path}/{locale_with_underscore}/LC_MESSAGES/{filename}.po</rule>
  </rules>
</config>
```

## Building the docs

As shown in the initial diagram, the first step is to generate the **.pot** files
by invoking the gettext builder using `make gettext`:

```makefile
gettext:
	$(SPHINXBUILD) -b gettext -t i18n ./source/ ./templates/
	@echo
	@echo "Build finished. The message catalogs are in ../templates."
```

Next is to push the **.pot** files to Zanta using:

```
zanata-cli push --disable-ssl-cert
```

After the translators have done sufficient work on certain languages, pull the
**.po** files for those languages from Zanta by using the language flag. For
example pulling the German translations:

```
zanata-cli pull -l de-DE  --disable-ssl-cert
```

{: {{site.data.css.tip-box}} }
> **Tip:** Only building languages that reach a certain percentage of
translation completion, say 70%, allows the document to be more easily read in
that language.

Now it is possible to build with the latest translations for a language:

```
sphinx-build -b html -D language=de_DE ./source/ ./build/de_DE/latest/
```

To simplify this process you can combine those steps in a shell script,
**build.sh**. You can even run `zanata-cli` in non-interactive mode so that it
is more portable for your CI/CD pipeline:

```bash
#!/bin/bash

# build .pot files
sphinx-build -b gettext -t i18n ./source/ ./templates/

# push .pot files to Zanata
zanata-cli -B push --url https://translate.zanata.org/ --username YOUR_USERNAME --key YOUR_KEY --disable-ssl-cert

# pull latest .po files from Zanata for each translated language
for locale in de-DE es; do
   zanata-cli -B pull --url https://translate.zanata.org/ --username YOUR_USERNAME --key YOUR_KEY -l $locale  --disable-ssl-cert
done

# build translated docs for each language
for lang in de_DE es; do
   sphinx-build -b html -D language=$lang ./source/ ./build/$lang/
done
```

Optionally, in order to keep search engines from choosing a
semi-translated language for English search results, a fairly common problem which may puzzle
your users, you can use the [sphinx-sitemap](https://github.com/jdillard/sphinx-sitemap)
extension to auto-generate a [multi-lingual sitemap](https://en.wikipedia.org/wiki/Sitemaps#Multilingual_and_multinational_Sitemaps) for your documentation.

{: {{site.data.css.info-box}} }
> **Note:** Shout out to [Frank Kloeker](https://github.com/eumel8) for helping
me get through the first time with [i18n docs](http://docs-i18n.readthedocs.io/en/latest/sphinx.html).

{% include feedback.html %}
