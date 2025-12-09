---
layout: post
title: "Versioned Documentation at Scale: A Flexible Docs-as-Code Strategy"
date: 2025-05-11
published: true
popularity: 17
comment_issue_id: 11
type: ssg
categories:
  - docs-as-code
---

In a world where code and documentation are increasingly intertwined,
docs-as-code workflows empower multiple teams to treat documentation with the
same rigor as source code. One important piece of this approach is deploying
versioned documentation in a way that’s both developer-friendly while keeping
it easy to automate, adapt, and maintain.

I’ll walk through a URL schema that lays the foundation for a file layout and
deployment strategy for docs-as-code websites in a scalable, organized, and
git-aware way. When combined with a single customized theme across all
projects, it is possible to provide a seamless documentation experience
involving several teams and projects.

## Breaking down the URL schema

Let’s dissect the parts of the schema:

```
https://docs.example.com/{group}/{ref}/{project}
```

* **`{group}`** — A collection of related documentation projects. For example,
  **modules** might group together multiple tightly-coupled modules that are
  always versioned and released together as part of a single system update.
  * In a different example, **team1** might group together several related
    projects they maintain. This makes it easier for them to add/maintain new
    documentation projects.
* **`{ref}`** — A reference to a version of the documentation. This could be a
  **git hash**, **branch name**, or **release tag**
* **`{project}`** — The documentation project. For example, **module1** would
  refer to a specific library’s docs

{: {{site.data.css.tip-box}} }
> **Tip:** It's recommended to build the groups in parallel to streamline the build process.

## File server directory layout

For example, here is a URL that always serves the latest version of **module1**
on the **develop** branch:

```
https://docs.example.com/modules/develop/head/module1/index.html
```

Which maps to a file structure like this, where each **githash** and **tag**
directory contains static builds of documentation, not pictures below, for all relevant projects at
that commit:

```
.
└── modules/
    ├── develop/
    │   ├── githash1/
    │   ├── githash2/
    │   ├── githash3/
    │   └── HEAD
    ├── release/
    |   └── v1
    │       ├── githash4/
    │       ├── githash5/
    │       ├── githash6/
    │       └── HEAD
    └── tags/
        ├── v1.0.0/
        └── v1.1.0/
```

The bulk of the deploy strategy is carried out by the logic in the publishing
script.

On every relevant push:

   1. Build the docs
   2. Deploy them to **/{group}/{branch}/{githash}/**
   3. After the deploy is successful, update the git hash that is stored in the
      **HEAD** file located at **/{group}/{branch}/HEAD**

{: {{site.data.css.info-box}} }
> **Note:** This deployment strategy offers two main benefits: an instant
> switchover to the latest content, and a safety mechanism that ensures the
> transition only happens after a successful deployment.
>
> Additionally, it allows users to reference documentation tied to a specific
> Git hash. This is useful in cases where the latest version is broken and a
> previous one needs to remain accessible, when users want to verify behavior
> for a particular commit (such as a nightly build), or when diagnosing issues
> with the documentation platform itself.

For every tagged build:

   1. Build the docs
   2. Deploy to **/{group}/tags/{tag}/**
      - Since tags are fixed, they don't need a **HEAD** file

Here is an animation of deployments for the **modules** group as commits and tags
are made on multiple branches:

<div class="video oversized landscape mv2">
    <iframe src="https://player.vimeo.com/video/1083238093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Git Tree And Directory Tree Deploy Demo"></iframe>
</div><small><i style="margin-top: -15px;"> <b>Fun fact:</b> This diagram follows the [video-as-code](https://github.com/jdillard/manimations/blob/main/docs-deploy/main.py) paradigm, built with [manim](https://github.com/ManimCommunity/manim).</i></small>

## How the `HEAD` file works

In this setup, documentation files are stored in an **S3 bucket** with an **EC2
instance running Nginx** acting as a reverse proxy that handles the routing to
the bucket.

Each branch directory (e.g., **modules/develop/**) contains a plain text file
named **HEAD** that sits along side the previously deployed git hashes. This
file stores the latest deployed git hash for that branch.

When a request comes in like:

```
https://docs.example.com/modules/develop/head/module1/index.html
```

the EC2 instance:

1. Detects **/head/** in the URL and reads the **HEAD** file for the branch
2. Resolves the git hash listed in that file (e.g., **githash3**)
3. Internally rewrites the request to serve the **develop/githash3** directory
   while keeping the URL unchanged in the browser

| Type          | Path                                                                     |
|---------------|--------------------------------------------------------------------------|
| **Requested** | https://docs.example.com/modules/develop/**head**/module1/index.html     |
| **Served**    | https://docs.example.com/modules/develop/**githash3**/module1/index.html |

This allows for a stable, human-friendly URL (**.../develop/head/...**) that
always points to the latest deployed docs for that branch.

{: {{site.data.css.info-box}} }
> **Note:** You can rename **head** anything you like—for example, **latest**.
> Just be aware that whatever name you choose effectively becomes a reserved
> keyword in all served URLs.

## Added flexibility

This deployment architecture supports several flexible patterns, enabling teams
to choose the right tradeoff between resource usage, visibility, and
complexity.

### Pull refs vs branch names for developer branches

For developer branches that need ephemeral preview builds—such as during code
reviews—you can deploy using either the pull request reference (e.g.
**pull/\<pr_number>**) or the branch name (e.g. **feature/new-thing**).

Pull refs allow you to consolidate all of the developer branches for that group
down to a single directory (**pull/**), making it easier to create clean up
rules for each group. Although, this comes at the expense of losing the context
of the branch name, if you need unique deploy logic per developer branch type,
**feature/** vs **review/** for example.

### Separate storage bucket for developer branches

Instead of deploying to the same production docs S3 bucket for developer
branches, use a separate dedicated bucket that has a single clean up rule for
all files. This avoids the need to maintain individual cleanup rules for each
group, reducing the risk of costly mistakes.

{: {{site.data.css.tip-box}} }
> **Tip:** The same approach can also be applied to release tags if you wanted
> to store them in a separate auto-archiving bucket.

### Auto trimming `HEAD` file

Instead of storing just a single git hash in the **HEAD** file, you can store a
stack of **N** hashes using a "push/pop" method. When an old hash gets "popped"
off the stack, the publishing script deletes the corresponding **githash**
directory. This is especially helpful with **release/** branches or other long
lasting branches.

## Wrapping up

This framework isn’t meant to be rigid, it’s meant to help you clarify what
matters most: what you need today, what you’ll need tomorrow, and where you’re
willing to compromise to avoid rebuilding a living ecosystem, while under
pressure, later on.

What’s more, it sets the stage for advanced features like auto-cleanup,
branch-based preview environments, or even cross-referenced documentation sets
across multiple repos. This strategy works with any static site generator and
CI/CD stack, it’s docs-as-code in spirit and in practice.
