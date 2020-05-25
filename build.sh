#!/bin/bash -x

env

function urldecode() { : "${*//+/ }"; echo -e "${_//%/\\x}"; }

if [ "${INCOMING_HOOK_BODY}" == "" ] ; then
  bundle exec jekyll build --source source
  exit 0
else
  PAYLOAD=$(urldecode "${INCOMING_HOOK_BODY}")
  SCRIPTS_STRING=$(echo "${PAYLOAD}" | jq -r .scripts)
  IFS='|' read -r -a SCRIPTS <<< "$SCRIPTS_STRING"

  for i in "${SCRIPTS[@]}" ; do
    case "$i" in
      crags)
        echo "ruby crags.rb"
        ;;
      comments)
        echo "ruby comments.rb"
        ;;
    esac
  done

  bundle exec jekyll build --source source
fi



