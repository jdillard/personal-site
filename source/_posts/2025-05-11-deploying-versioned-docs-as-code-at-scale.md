---
layout: post
title: "Versioned Documentation at Scale: A Flexible Docs-as-Code Deploy Strategy"
date: 2025-05-011
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

* **`{group}`** — A collection of related documentation projects. For example, **modules** might group together multiple tightly-coupled modules that are always versioned and released together as part of a single system update.
  * In a different example, **team1** might group together several related projects they maintain. This makes it easier for them to add/maintain new documentation projects.
* **`{ref}`** — A reference to a version of the documentation. This could be a **git hash**, **branch name**, or **release tag**
* **`{project}`** — The documentation project. For example, **module1** would refer to a specific library’s docs

{: {{site.data.css.info-box}} }
> **Note:** Groups offer two key advantages: they allow multiple documentation projects to be deployed together for a single commit, keeping everything in sync for a release; and they help reduce technical debt by making it easy to add new projects. It's recommended to build the group in parallel to streamline this process.

For example, a URL that always serves the latest version of **module1** on the **develop** branch:

```
https://docs.example.com/modules/develop/head/module1
```

## File server directory layout

This scheme maps directly to a static file structure:

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

Each **githash** and **tag** directory contains static builds of documentation for all relevant projects at that commit. This deploy strategy, the bulk of which is carried out by the logic in the publishing script, looks like:

On every relevant push:

   1. Build the docs
   2. Deploy them to **/{group}/{branch}/{githash}/**
   3. After the deploy is successful, update the git hash that is stored in the `HEAD` file located at **/{group}/{branch}/HEAD**

{: {{site.data.css.info-box}} }
> **Note:** This deployment strategy offers two main benefits: an instant switchover to the latest content, and a safety mechanism that ensures the transition only happens after a successful deployment.
>
> Additionally, it allows users to reference documentation tied to a specific Git hash. This is useful in cases where the latest version is broken and a previous one needs to remain accessible, when users want to verify behavior for a particular commit (such as a nightly build), or when diagnosing issues with the documentation platform itself.

For tagged builds:

   1. Build the docs
   2. Deploy to **/{group}/tags/{tag}/**

Here is an example of deployments for the **modules** group showing, **githash1** and **githash2** on **develop** and then **githash3** on **pull/1234**:

<div class="video oversized landscape mv2">
    <iframe src="https://player.vimeo.com/video/1083238093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Git Tree And Directory Tree Deploy Demo"></iframe>
</div><small><i style="margin-top: -15px;"> <b>Fun fact:</b> This diagram follows the [video-as-code](https://github.com/jdillard/manimations/blob/main/docs-deploy/main.py) paradigm, built with [manim](https://github.com/jdillard/personal-site/).</i></small>

## How the `HEAD` file works

In this setup, documentation files are stored in an **S3 bucket** with an **EC2 instance running Nginx** acting as a reverse proxy that handles the routing to the bucket.

Each branch directory (e.g., **modules/develop/**) contains a plain text file named `HEAD` that sits along side the previously deployed git hashes. This file stores the latest deployed git hash for that branch.

When a request comes in like:

```
https://docs.example.com/modules/develop/head/module1/index.html
```

the EC2 instance:

1. Detects `/head/` in the URL and reads the `HEAD` file for the branch: **https://docs.example.com/modules/develop/HEAD**
2. Resolves the git hash listed in that file (e.g., **githash3**)
3. Internally rewrites the request to serve: **https://docs.example.com/modules/develop/githash3/module1/index.html** while keeping the URL unchanged in the browser

This allows for a stable, human-friendly URL (**.../modules/develop/head/...**) that always points to the latest deployed docs for that branch. Alternatively, since tags are fixed, they have no need for a `HEAD` file.

{: {{site.data.css.info-box}} }
> **Note:** You can rename head anything you like—for example, latest. Just be aware that whatever name you choose effectively becomes a reserved keyword in all served URLs.

## Added flexibility

This deployment architecture supports several flexible patterns, enabling teams to choose the right tradeoff between resource usage, visibility, and complexity.

### Pull refs vs branch names for developer branches

For developer branches that need ephemeral preview builds—such as during code reviews—you can deploy using either the pull request reference (e.g. **pull/\<pr_number>**) or the branch name (e.g. **feature/new-thing**).

This allows you to consolidate all of the developer branches for that group down to a single directory (**pull/**), making it easier to create clean up rules for each group.

{: {{site.data.css.info-box}} }
> **Note:** This comes at the expense of losing the branch name/prefix, meaning you lose some context if you need deploy logic per developer branch type, **feature/** vs **review/** for example.

### Separate storage bucket for developer branches

Instead of deploying to the same **s3://docs-bucket/modules/** location, use a separate dedicated S3 bucket that has a single clean up rule for all files. For example, **s3://docs-preview-bucket/modules/pull/1234/** vs **s3://docs-bucket/modules/develop/**.

This avoids the need to maintain individual cleanup rules for each group, reducing the risk of costly mistakes.

{: {{site.data.css.tip-box}} }
> **Tip:** The same approach can also be applied to release tags if you wanted to store them in a separate auto-archiving bucket.

### Auto trimming `HEAD` file

Instead of storing just a single git hash in the `HEAD` file, you can store a stack of N hashes using a "push/pop" method. When an old hash gets "popped" off the stack, the publishing script deletes the corresponding **githash** directory. This is especially helpful with **release/** branches or other long lasting branches.

## Wrapping up

A scalable documentation deployment strategy is more than an implementation detail, it’s a foundation for collaboration across teams. This model bridges Git history with production infrastructure, giving you traceability, rollback safety, and clean previews without compromising the documentation experience.

By segmenting docs by group, ref, and project, and layering in the HEAD pointer mechanism, teams gain the confidence to ship docs early and often. Whether you’re serving public API docs, internal module references, or release-specific software documentation, this layout can adapt to different workflows.

This framework isn’t meant to be rigid, it’s meant to help you clarify what matters most: what you need today, what you’ll need tomorrow, and where you’re willing to compromise to avoid rebuilding a living ecosystem, while under pressure, later on.

What’s more, it sets the stage for advanced features like auto-cleanup, branch-based preview environments, or even cross-referenced documentation sets across multiple repos. This strategy works with any static site generator and CI/CD stack, it’s docs-as-code in spirit and in practice.