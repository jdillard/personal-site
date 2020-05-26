---
layout: post
title: "Using GitHub Issues for Static Blog Comments"
date: 2020-05-25
published: true
comment_issue_id: 9
categories:
  - jamstack
  - jekyll
---

I was looking for a way to host my comments on [GitHub Issues](https://github.com/jdillard/blog-comments/issues)
when I stumbled on [Paul Knopf's blog post](https://pknopf.com/post/2018-10-13-comments-for-static-sites-using-github-issues) where he generated his blog posts comments server side. Since I didn't want to use client-side scripting to render and post comments or rely
on a GitHub App like [Utterances](https://utteranc.es/), I decided to adapt his
approach to my Jekyll based blog.

His implementation was done before GitHub Actions matured, so I was able to take
it a step further and have GitHub trigger my blog's Netlify build hook any time
a comment is created, edited, or deleted.

## Add Post Front Matter

In each blog post's front-matter, add a [GitHub Issue ID](https://github.com/jdillard/blog-comments/issues/3)
field that points to the comment thread for that page.

```yaml
comment_issue_id: 3
```

## Convert GitHub API to HTML

Then loop through each posts front matter, using [Octokit](https://github.com/octokit/octokit.rb)
to query the issues comments and auto-generate HTML snippets in the
`_includes/comments` directory based on the issue's number.

In this [example script](https://github.com/jdillard/personal-site/blob/master/comments.rb)
the comments are styled using [Tachyons](https://tachyons.io/), but it is
possible to customize how the HTML is generated. This script allows for comments
to be generated for all posts, `ruby comments.rb` or for a single issue based on
its number, `ruby comments.rb 3`.

If your build system supports [environmental variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables), you can securely store your [GitHub Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
in `ENV["COMMENTS_TOKEN"]` to prevent it from being stored in plain text.


```ruby
require 'octokit'
require 'yaml'
require 'kramdown'

repo = 'jdillard/blog-comments'
issue = ARGV[0]

# Set access token
client = Octokit::Client.new(:access_token => ENV["COMMENTS_TOKEN"])

# Configure client
client.auto_paginate = true

def create_comments(client, repo, issue_id)
  File.open("source/_includes/comments/" + issue_id.to_s  + ".html","w") do |f|
    if client.issue(repo, issue_id).comments > 0
      # Loop over comments and write out comment file
      client.issue_comments(repo, issue_id).each do |comment|
        # count reactions for each comment
        reactions = Hash.new
        client.issue_comment_reactions(repo, comment["id"]).each do |reaction|
          if reaction["content"] === "+1"
            reactions.key?("plusOne") ? reactions["plusOne"] +=  1 : reactions["plusOne"] = 1
          end
          if reaction["content"] === "-1"
            reactions["minusOne"] ? reactions["minusOne"] +=  1 : reactions["minusOne"] = 1
          end
          if reaction["content"] === "laugh"
            reactions["laugh"] ? reactions["laugh"] +=  1 : reactions["laugh"] = 1
          end
          if reaction["content"] === "hooray"
            reactions["hooray"] ? reactions["hooray"] +=  1 : reactions["hooray"] = 1
          end
          if reaction["content"] === "confused"
            reactions["confused"] ? reactions["confused"] +=  1 : reactions["confused"] = 1
          end
          if reaction["content"] === "heart"
            reactions["heart"] ? reactions["heart"] +=  1 : reactions["heart"] = 1
          end
          if reaction["content"] === "eyes"
            reactions["eyes"] ? reactions["eyes"] +=  1 : reactions["eyes"] = 1
          end
          if reaction["content"] === "rocket"
            reactions["rocket"] ? reactions["rocket"] +=  1 : reactions["rocket"] = 1
          end
        end
        f << '<div class="comment flex flex-row">'+"\n"
        f << '  <div class="mr3">'+"\n"
        f << '    <a href="' + comment["user"]["html_url"] + '" target="_blank">'+"\n"
        f << '        <img class="br2 mw3" src="' +  comment["user"]["avatar_url"] + '"/>'+"\n"
        f << '    </a>'+"\n"
        f << '  </div>'+"\n"
        f << '  <div class="flex relative flex-column ba b--light-gray br1 mb3 w-100">'+"\n"
        f << '    <div class="f6 ph3 pv2 bg-near-white bb b--light-gray gray">'+"\n"
        f << '        <a href="' + comment["user"]["html_url"] + '" target="_blank" class="mid-gray b link">' + comment["user"]["login"] + '</a> commented on'+"\n"
        f << '        <a href="' + comment["html_url"] + '" target="_blank" class="gray link">'+"\n"
        f << '            <relative-time datetime="' + comment["created_at"].to_i.to_s + '">'+"\n"
        f << '               ' + comment["created_at"].strftime("%B %d, %Y") + "\n"
        f << '            </relative-time>'+"\n"
        f << '        </a>&nbsp;'
                        comment["updated_at"] === comment["created_at"] ? f << "\n" : f << "(edited)\n"
        f << '    </div>'+"\n"
        f << '    <div class="body pv2 ph3 black-70">'+"\n"
        f << '      ' + Kramdown::Document.new(comment["body"], :input => 'GFM', :syntax_highlighter => 'rouge').to_html+"\n"
        f << '    </div>'+"\n"
        f << '    <div class="bt b--light-gray gray">'+"\n"
        f << '      <ul class="flex flex-wrap pl0 mv0 list">'+"\n"
                    reactions.each do |reaction, count|
        f << '        <li class="pv2 ph3 br b--light-gray">'+"\n"
                        if reaction === "plusOne"
        f << '          <g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="+1" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "minusOne"
        f << '          <g-emoji alias="-1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="-1" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "laugh"
        f << '          <g-emoji alias="smile" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="smile" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "hooray"
        f << '          <g-emoji alias="tada" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="tada" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f389.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "confused"
        f << '          <g-emoji alias="thinking_face" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="thinking_face" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f615.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "heart"
        f << '          <g-emoji alias="heart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "eyes"
        f << '          <g-emoji alias="eyes" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f440.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="eyes" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f440.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
                        if reaction === "rocket"
        f << '          <g-emoji alias="rocket" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f680.png" class="v-mid">'+"\n"
        f << '            <img class="v-mid" alt="rocket" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">'+"\n"
        f << '          </g-emoji>' + count.to_s + "\n"
                        end
        f << '        </li>'+"\n"
                    end
        f << '      </ul>'+"\n"
        f << '    </div>'+"\n"
        f << '  </div>'+"\n"
        f << '</div>'+"\n"
      end
      f << '<div class="pa3 tc ba b--light-gray black-70 mb3">'+"\n"
      f << '  <a href="https://github.com/' + repo + '/issues/' + issue_id.to_s + '" class="b mid-gray">Join the discussion on GitHub</a>'+"\n"
      f << '</div>'
    else
      f << '<div class="pa3 tc ba b--light-gray black-70 mb3">'+"\n"
      f << '  There are currently no comments. <a href="https://github.com/' + repo + '/issues/' + issue_id.to_s + '" class="b mid-gray">Leave a comment on GitHub</a>'+"\n"
      f << '</div>'
    end
  end
end

if issue
  File.delete('source/_includes/comments/' + issue + '.html') if File.exist?('source/_includes/comments/' + issue + '.html')
  create_comments(client, repo, issue)
else
  # clear the old crags markdown files
  Dir.foreach('source/_includes/comments') do |f|
    fn = File.join('source/_includes/comments', f)
    File.delete(fn) if f != '.' && f != '..'
  end

  # Loop through blog posts and grab front matter
  Dir.glob("source/_posts/*.md") do |blog_post|
    front_matter = YAML.load_file(blog_post)
    # Get page.comments listed in front matter if published is true
    if front_matter["published"] === true && front_matter["comment_issue_id"]
      create_comments(client, repo, front_matter["comment_issue_id"])
    end
  end
end
```

## Include HTML Snippet in Post Layout

In the post layout, check if the `comment_issue_id` field exists before
including the auto-generated comment snippet related to that blog post. In this
example it would be located at `_includes/comments/3.html`.

```liquid
{% raw %}{% if page.comment_issue_id %}
  {% include {{ page.comment_issue_id | prepend: "comments/" | append: ".html" }} %}
{% endif %}{% endraw %}
```

## Style the Rendered Markdown

Then add [styles for the rendered markdown](https://github.com/jdillard/personal-site/blob/master/source/_sass/_comments.scss)
that makes up the body of the comments.

```css
.comment .body a {
    color: #FF725C;
    text-decoration: none;
}

.comment .body a:hover {
    color: #FF725C;
    text-decoration: underline;
}

.comment .body blockquote {
    border-left: 3px solid #ccc;
    margin-left: 15px;
}

.comment .body blockquote p {
    padding: 5px 0 5px 10px;
}

.comment .body > p > code {
    background-color: #efefef;
    padding: 2px;
    font-size: .9em;
}

.comment .body pre > code {
    padding: 10px;
    display: block;
    white-space: pre;
    font-size: .9em;
}

.comment ul.task-list {
    list-style: none;
    padding-left: 20px;
}

.comment input.task-list-item-checkbox {
    margin-right: 5px;
}
```

## Create a GitHub Action

Use [GitHub Actions](https://github.com/jdillard/blog-comments/blob/master/.github/workflows/main.yml)
to trigger a build any time an issue comment is created, edited, or deleted.
Store the [deploy key](https://docs.netlify.com/configure-builds/build-hooks/)
as an [encrypted secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) to prevent it from being stored in plain text.

```yaml
{% raw %}name: Trigger Netlify Build

on: issue_comment

jobs:
  build:
    name: Request Netlify Webhook
    runs-on: ubuntu-latest
    steps:
      - name: Curl request
        env:
          NETLIFY_DEPLOY_KEY: ${{ secrets.NETLIFY_DEPLOY_KEY }}
          ISSUE_ID: ${{ github.event.issue.number }}
        run: >
          curl -X POST -d '{"scripts": "comments", "arguments": "'$ISSUE_ID'"}' https://api.netlify.com/build_hooks/$NETLIFY_DEPLOY_KEY{% endraw %}
```

## Create a Build Script

Finally, create a [build script](https://github.com/jdillard/personal-site/blob/master/build.sh)
that the builder can pass environmental variables to.

```bash
#!/bin/bash -x

function urldecode() { : "${*//+/ }"; echo -e "${_//%/\\x}"; }

if [ -n "${INCOMING_HOOK_BODY}"]; then
  PAYLOAD=$(urldecode "${INCOMING_HOOK_BODY}")
  SCRIPTS_STRING=$(echo "${PAYLOAD}" | jq -r .scripts)
  ARGUMENTS_STRING=$(echo "${PAYLOAD}" | jq -r .arguments)

  case "$SCRIPTS_STRING" in
    comments)
      bundle exec ruby comments.rb $ARGUMENTS_STRING
      ;;
  esac
fi

bundle exec jekyll build --source source
```
