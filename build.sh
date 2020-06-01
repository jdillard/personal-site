#!/bin/bash -x

function urldecode() { : "${*//+/ }"; echo -e "${_//%/\\x}"; }

if [ -n "${INCOMING_HOOK_BODY}" ]; then
  PAYLOAD=$(urldecode "${INCOMING_HOOK_BODY}")
  SCRIPTS_STRING=$(echo "${PAYLOAD}" | jq -r .scripts)
  ARGUMENTS_STRING=$(echo "${PAYLOAD}" | jq -r .arguments)
  IFS='|' read -r -a SCRIPTS <<< "$SCRIPTS_STRING"

  for i in "${SCRIPTS[@]}" ; do
    case "$i" in
      comments)
        bundle exec ruby comments.rb $ARGUMENTS_STRING
        ;;
    esac
  done
fi

ruby crags.rb
bundle exec jekyll build --source source
