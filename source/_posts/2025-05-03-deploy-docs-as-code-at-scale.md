---
layout: post
title: "Versioned Documentation at Scale: A Flexible Docs-as-Code Deploy Strategy"
date: 2025-05-03
published: true
popularity: 17
comment_issue_id: 10
type: ssg
categories:
  - docs-as-code
---

In a world where code and documentation are increasingly intertwined, docs-as-code workflows empower multiple teams to treat documentation with the same rigor as source code. One important piece of this approach is deploying versioned documentation in a way that’s both developer-friendly as well as easy to automate, adapt, and maintain.

In this post, I’ll walk through a URL schema that lays the foundation for a file layout strategy to deploy docs-as-code websites in a scalable, organized, and git-aware way.

With a single customized theme across all projects, it is possible to provide a seamless documentation experience involving several teams and projects.

## Breaking down the URL schema

Here’s what it looks like:

```
https://docs.example.com/{group}/{ref}/{project}
```

Let’s dissect the parts of this schema:

* **`{group}`** — A collection of related documentation projects. For example, **packages** might group together multiple Python libraries
* **`{ref}`** — A reference to a version of the documentation. This could be a **git hash**, **branch name**, or **release tag**
* **`{project}`** — The documentation project. For example, **package1** would refer to a specific library’s docs

For example, a URL that always serves the latest version of **package1** on the **develop** branch:

```
https://docs.example.com/packages/develop/head/package1
```

## File server directory layout

This scheme maps directly to a static file structure:

```
.
└── packages/
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

Each **githash** and **tag** directory contains static builds of documentation for all relevant projects at that commit. This deploy strategy, the bulk of which is carried out by the logic in the publishing script, looks like:

On every relevant push:

   * Build the docs
   * Deploy them to **/{group}/{branch}/{githash}/**
   * After the deploy is successful, update the git hash that is stored in the `HEAD` file located at **/{group}/{branch}/HEAD**

{: {{site.data.css.info-box}} }
> **Note:** This deployment strategy has the advantage of an instant switch over of the content to the laster version, with the added safety on waiting until the full deploy is completed successfully before switching over to it.
>
> It also allows users to reference a specific git hash, which can cbe useful if the latest version of the docs breaks and a previous version needs to be available in the interim, a user needs to confirm something in the docs for a specific hash for any reason (a nightly build for example), or to help troubleshooting an issue with the docs platform itself. Each having their own values that change over time and between projects.

For tagged builds:

   * Build the docs
   * Deploy to **/{group}/tags/{tag}/**
   
Here is an example of deployments for the **packages** group showing, **githash1** and **githash2** on **develop** and then **githash3** on **pull/1234**:

<div class="video oversized landscape mv2">
    <iframe src="https://player.vimeo.com/video/1083238093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" width="1920" height="1080" title="Git Tree And Directory Tree Deploy Demo"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
</div>

## How the `HEAD` file works

In this setup, documentation files are stored in an **S3 bucket** with an **EC2 instance running Nginx** acting as a reverse proxy that handles the routing to the bucket.

Each branch directory (e.g., **packages/develop/**) contains a plain text file named `HEAD` that sits along side the previously deployed git hashes. This file stores the latest deployed git hash for that branch.

When a request comes in like:

```
https://docs.example.com/packages/develop/head/package1/index.html
```

the EC2 instance:

1. Detects `/head/` in the URL and reads the `HEAD` file for the branch: **https://docs.example.com/packages/develop/HEAD**
2. Resolves the git hash listed in that file (e.g., **githash3**)
3. Internally rewrites the request to serve: **https://docs.example.com/packages/develop/githash3/package1/index.html** while keeping the URL unchanged in the browser

This allows for a stable, human-friendly URL (**.../packages/develop/head/...**) that always points to the latest deployed docs for that branch. Alternatively, since tags are fixed, they have no need for a `HEAD` file.

{: {{site.data.css.info-box}} }
> **Note:** You can use any name for **head** that you want, for example **latest**. Just note, this essentially becomes a reserved word in all served URLs.

## Added flexibility

This deployment architecture supports several flexible patterns, enabling teams to choose the right tradeoff between resource usage, visibility, and complexity.

### Pull refs vs branch names for developer branches

For developer branches that need ephemeral preview builds—such as during code reviews—you can deploy using either the pull request reference (e.g. **pull/\<pr_number>**) or the branch name (e.g. **feature/new-thing**).

This allows you to consolidate all of the developer branches for that group down to a single directory (**pull/**), making it easier to create clean up rules for each group.

{: {{site.data.css.info-box}} }
> **Note:** This comes at the expense of losing the branch name/prefix, meaning you lose some context if you need deploy logic per developer branch type, **feature/** vs **review/** for example.

### Separate storage bucket for developer branches

Instead of deploying to the same **s3://docs-bucket/packages/** location, use a separate dedicated S3 bucket that has a single clean up rule for all files. For example, **s3://docs-preview-bucket/packages/pull/1234/** vs **s3://docs-bucket/packages/develop/**.

This avoids the need to maintain individual cleanup rules for each group, reducing the risk of costly mistakes.

{: {{site.data.css.tip-box}} }
> **Tip:** The same approach can also be applied to release tags if you wanted to store them in a separate auto-archiving bucket.

### Auto trimming `HEAD` file

Instead of storing just a single git hash in the `HEAD` file, you can store a stack of N hashes using a "push/pop" method. When an old hash gets "popped" off the stack, the publishing script deletes the corresponding **githash** directory. This is especially helpful with **release/** branches or other long lasting branches.

## Wrapping up

Docs-as-code is about much more than treating documentation as text in a Git repo — it's about enabling traceability, review, and automation. A flexible deployment scheme like this keeps your docs organized and scalable.

You can extend this model to other doc sets (e.g., APIs, tutorials, architecture guides) by just adjusting the **{group}** or **{project}** portion.
