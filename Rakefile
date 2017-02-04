# encoding: utf-8
task :default => [:test]

# CONFIGURATION VARIABLES (on top of those defined by Jekyll in _config(_deploy).yml)

# MANAGING MULTI-USER WORK
# If you are using git to manage the sources, you might want to check the repository
# is up-to-date with the remote branch, before deploying.  In fact---when this is not the
# case---you end up deploying a previous version of your website.
#
# The following variable determines whether you want to check the git repository is
# up-to-date with the remote branch and, if not, issue a warning.

$git_check = true

# The following variable controls whether we push to the remote branch after deployment,
# committing all uncommitted changes

$git_autopush = false

#
# --- NO NEED TO TOUCH ANYTHING BELOW THIS LINE ---
#

desc 'Clean up generated site'
task :clean do
  cleanup
end


desc 'Preview on local machine'
task :preview => :clean do
  jekyll('serve')
end
task :serve => :preview


desc 'Test on local machine'
task :test do
  require "html-proofer"

  HTMLProofer.check_directory("_site/", {
    :allow_hash_href => true,
    :http_status_ignore => [999,0]
  }).run
end

desc 'Build for deployment (but do not deploy)'
task :build, [:deployment_configuration] => :clean do |t, args|
  args.with_defaults(:deployment_configuration => 'deploy')
  config_file = "_config_#{args[:deployment_configuration]}.yml"

  if rake_running then
    puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
    puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
    puts "Are you sure you want to continue? [Y|n]"

    ans = STDIN.gets.chomp
    exit if ans != 'Y'
  end

  jekyll("build --config _config.yml,#{config_file}")
end


#
# General support functions
#

# remove generated site
def cleanup
  sh 'rm -rf _site'
end

# launch jekyll
def jekyll(directives = '')
  sh 'bundle exec jekyll ' + directives
end

# check if there is another rake task running (in addition to this one!)
def rake_running
  `ps | grep 'rake' | grep -v 'grep' | wc -l`.to_i > 1
end

def git_local_diffs
  %x{git diff --name-only} != ""
end

def git_remote_diffs branch
  %x{git fetch}
  %x{git rev-parse #{branch}} != %x{git rev-parse origin/#{branch}}
end

def git_repo?
  %x{git status} != ""
end

def git_requires_attention branch
  $git_check and git_repo? and git_remote_diffs(branch)
end
