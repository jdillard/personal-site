---
layout: post
title: "Versioned Documentation at Scale: A Flexible Docs-as-Code Deploy Strategy"
date: 2025-05-03
published: true
popularity: 17
comment_issue_id: 10
type: sphinx
categories:
  - docs-as-code
---

In a world where code and documentation are increasingly intertwined, docs-as-code workflows empower teams to treat documentation with the same rigor as source code. One important piece of this approach is deploying versioned documentation in a way that’s both developer-friendly as well as easy to automate and maintain.

In this post, I’ll walk through a URL schema that is the foundation of a file layout strategy to deploy docs-as-code websites in a scalable, organized, and git-aware way.

## Breaking down the URL schema

Here’s what it looks like:

```
https://docs.example.com/{group}/{ref}/{project}
```

Let’s dissect the parts of this schema:

* **`{group}`** — A collection of related documentation projects. For example, **packages** might group together multiple Python libraries.
* **`{ref}`** — A reference to a version of the documentation. This can be a **git hash**, **branch name**, or **release tag**.
* **`{project}`** — The actual documentation project. For instance, **package1** would refer to a specific library’s docs.

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
   * Update the `HEAD` file in **/{group}/{branch}/HEAD**

For tagged builds:

   * Build the docs
   * Deploy to **/{group}/tags/{tag}/**
   
Here is an example of deployments for the **packages** group showing just `githash3` on **develop** and `v1.0.0`, but the other hashes and tags would look similar:

```
.
└── packages/
    ├── develop/
    |   ├── githash3/
    |   |   ├── package1/
    |   |   │   ├── index.html
    |   |   |   └── changelog.html
    |   |   ├──package2/
    |   |   |   ├── index.html
    |   |   |   └── changelog.html
    |   |   └── package3/
    |   |       ├── index.html
    |   |       └── changelog.html
    |   └── HEAD  # plain text file containing the latest deployed git hash (githash3)
    └── tags/
        └── v1.0.0/
            ├── package1/
            │   ├── index.html
            |   └── changelog.html
            ├──package2/
            |   ├── index.html
            |   └── changelog.html
            └── package3/
                ├── index.html
                └── changelog.html
```

## How the `HEAD` redirect works

In this setup, documentation files are stored in an **S3 bucket** and an **EC2 instance running Nginx** acts as a reverse proxy that handles the routing to the bucket.

Each branch directory (e.g., **packages/develop/**) contains a plain text file named `HEAD`. This file stores the latest deployed **git hash** for that branch.

When a request comes in like:

```
https://docs.example.com/packages/develop/head/package1/index.html
```

the EC2 instance:

1. Detects `/head/` in the URL and reads the `HEAD` file for the **develop** branch
2. Resolves the git hash listed in that file (e.g., **githash3**)
3. Internally rewrites the request to serve: **https://docs.example.com//packages/develop/githash3/package1/index.html** while keeping the URL unchanged in the browser

This allows for a stable, human-friendly URL (**[...]/develop/head/[...]**) that always points to the latest deployed docs for that branch. Since tags are fixed, they have no need for a `HEAD` file.

## Adding flexibility

This deployment architecture supports several flexible patterns, enabling teams to choose the right tradeoff between resource usage, visibility, and complexity.

### Pull refs vs branch names for developer branches

For developer branches, which often need ephimeral preview builds for review purposes, you can choose to deploy based on the pull request reference, typically **pull/{pr_number}**, or the branch name, **feature/new-thing**.

This allows you to consolidate all of the developer branches for that group to a single directory (typically **pull/**), making it easier to create clean up rules for each group. Although, this comes at the expense of losing the branch name/prefix, meaning you lose some context if you need different deploy logic for different types of developer branches, **feature/** vs **review/** for example.

### Separate storage bucket for developer branches

Instead of deploying to the same **packages/** tree, use a dedicated S3 bucket that has a single clean up rule for all files. For example, **s3://docs-preview-bucket/packages/pull/1234/{githash}**.

This allows you to not have to maintain individual clean up rules for each group, preventing a potentially costly mistake.

{: {{site.data.css.info-box}} }
> **Note:** The same approach could be applied to release tags if you wanted to store them in a bucket with a different storage type.

### Auto trimming `HEAD` file

Instead of storing a single git hash in the `HEAD` file, you can store a stack of N hashes using a "push/pop" method. When an old hash gets "popped" off the stack, the publising script deletes the corresponding **githash** directory. This is especially helpful with **release/** branches or other long lasting branches.

## Wrapping up

Docs-as-code is about much more than treating documentation as text in a Git repo — it's about enabling traceability, review, and automation. A flexible deployment scheme like this keeps your docs organized and scalable.

You can extend this model to other doc sets (e.g., APIs, tutorials, architecture guides) by just adjusting the **{group}** or **{project}** portion.
