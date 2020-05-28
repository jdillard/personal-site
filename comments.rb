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
        f << '<div class="comment f6 flex flex-row">'+"\n"
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
      f << '<div class="pa3 tc ba b--light-gray black-70 bg-near-white shadow-5 mb3">'+"\n"
      f << '  <a href="https://github.com/' + repo + '/issues/' + issue_id.to_s + '#new_comment_field" class="b mid-gray">Join the discussion using GitHub</a>'+"\n"
      f << '</div>'
    else
      f << '<p class="tc pa3 pv3 f6 gray ba b--light-gray">There are currently no comments.</p>'+"\n"
      f << '<div class="pa3 tc ba b--light-gray black-70 bg-near-white shadow-5 mb3">'+"\n"
      f << '  <a href="https://github.com/' + repo + '/issues/' + issue_id.to_s + '#new_comment_field" class="b mid-gray">Leave a comment using GitHub</a>'+"\n"
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
