#!/bin/bash -x

function urldecode() { : "${*//+/ }"; echo -e "${_//%/\\x}"; }

if [ "${INCOMING_HOOK_BODY}" == "" ] ; then
  bundle exec jekyll build --source source
  exit 0
else
  PAYLOAD=$(urldecode "${INCOMING_HOOK_BODY}")
  SCRIPTS_STRING=$(echo "${PAYLOAD}" | jq -r .scripts)
  ARGUMENTS_STRING=$(echo "${PAYLOAD}" | jq -r .arguments)
  IFS='|' read -r -a SCRIPTS <<< "$SCRIPTS_STRING"

  for i in "${SCRIPTS[@]}" ; do
    case "$i" in
      crags)
        echo "ruby crags.rb"
        ;;
      comments)
        bundle exec ruby comments.rb $ARGUMENTS_STRING
        ;;
    esac
  done

  bundle exec jekyll build --source source
fi



