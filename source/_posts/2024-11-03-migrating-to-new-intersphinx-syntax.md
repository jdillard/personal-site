---
layout: post
title: "Migrating to the New Intersphinx Reference Syntax"
date: 2024-11-03
published: true
popularity: 17
comment_issue_id: 10
type: sphinx
categories:
  - sphinx
  - intersphinx
---

In [Sphinx 4.4](https://www.sphinx-doc.org/en/master/changes/4.4.html) a new `external` role was added for use with the intersphinx references, which changes
the syntax of intersphinx references. The old format of a basic reference was:

```
:ref:`invname:target`
```

And the new format is:

```
:external+invname:ref:`target`
```

As covered in the [intersphinx](https://www.sphinx-doc.org/en/master/usage/extensions/intersphinx.html#role-external) docs, using this new role forces the reference lookup to external projects only. This is in comparison to the previous behavior where Sphinx would look through all internal references before attempting to find external references, sometimes creating issues in the process.

## Reasoning behind the change

[@jakobandersen](https://github.com/jakobandersen), the author of the changes, explains the main reasoning behind the change in this [comment](https://github.com/sphinx-doc/sphinx/issues/6911#issuecomment-1433021345):

{: {{site.data.css.quote}} }
> The external role was introduced because of problems with the extended [old] syntax, so I suggest to never use the extended syntax, but switch to the "external" role.
>
> The main problem with the extended [old] syntax is that each domain (`py`, `c`, `cpp`, `js`, etc.) needs to support it, but using a `:` as delimiter is making it very complicated to do so in a clean way. [...] It was part of a larger overhaul of intersphinx to support domains in a generic manner.

So if you don't use domains in your Sphinx projects, you may not run into any issues keeping or continuing to use the old "extended" syntax, but there are benefits to switching over to the new syntax.

## Switching over to the new syntax

To make it easier to switch to the new syntax use a couple find and replace regexes, one for when a title is specified and one where it isn't.
These can be used in VS Code's **Replace in Files** with the regex option selected.

Here is the find/replace pair for external references without a title (test on [regex101](https://regex101.com/r/naJzo0/3)):

```
// find regex for external references without a title
:(ref|doc|term):`([^<`:]+):([^:]+)`

// replace with
:external+$2:$1:`$3`
```
And the find/replace pair for external references with titles (test on [regex101](https://regex101.com/r/AoEwFd/1)):
```
// find regex for references with a title
:(ref|doc|term):`([^`]+)\s?<([^:`]+):([^:`]+)>`

// replace with
:external+$3:$1:`$2 <$4>`
```

Make sure to verify the changes with `git diff`.
