#!/bin/bash -x

env

if [ "${INCOMING_HOOK_BODY}" == "" ] ; then
  bundle exec jekyll build --source source
  exit 0
else
  SCRIPTS=$(echo "${INCOMING_HOOK_BODY}" | jq -r .scripts)
  echo "${SCRIPTS}"
  ruby ./crags.rb
  bundle exec jekyll build --source source
fi



