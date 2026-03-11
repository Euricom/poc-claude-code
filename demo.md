# Demo

## Hotkeys

**General:**

- `shift-tab`
- `esc`
- `esc + esc`
- `ctrl+o` : toggle verbose mode
- `ctrl+z` : suspend the terminal (mac only)
- `ctrl+s` : stash prompt for next task
- `ctrl+g` : open default editor (for large prompt or plan)
- `ctrl+v` : past image into the prompt
- `ctrl+r` : search through the prompt history
- `up/down` : navigate through the prompt history
- `option+t` : toggle thinking mode

**Prompt:**

- `option+left/right`: word left/right
- `ctrl-a`: begin of the line
- `ctrl+e`: end of the line
- `ctrl+k`: delete word
- `ctrl-u`: delete current line

## Commands

- `/clear`: clear the prompt
- `/context`: show the context 
- `/models`: switch between models
- `/doktor`: check Claude Code installation health
- `/usage`: Show plan usage
- `/release-notes`: Show release notes

## 

## Tasks

```
Add these features:

- User List Page: Use the products page as a example. Display users in a table. Each column is sortable.
- Task List Page: List tasks in a table.
- User Create/Edit Form: Include "Add" button on the user list. Clicking a table row or "Add" opens the form for editing or creating users.

Don't look in git history for the codebase, just use the codebase as it is.
Build a task list supporting task dependencies.

Present me first the task list, before you start working on the codebase.
```

## batch

```
❯ /batch replace all console.log calls with structerd logging from loglevel
```

## Security

With hookify

```
/hookify:hookify block the access of the .env files from the codebase
```

Just ask, probably the permission is updated

```
Only allow web fectch to the trusted domains defined by Anthropic,
https://code.claude.com/docs/en/claude-code-on-the-web#default-allowed-domains
```

Test filesystem isolation:

```
  # Try to read a file outside working directory
  cat /etc/passwd

  # Try to write outside working directory
  echo "test" > /tmp/test.txt

  # Try to access parent directories
  ls ../../../

  Test network isolation:
  # Attempt outbound connection
  curl https://euri.com

  # Try DNS lookup
  nslookup google.com

  # Network socket access
  nc -zv google.com 443

  Test write boundaries:
  # These should work (in working directory)
  mkdir test-dir
  echo "safe" > test-file.txt

  # These should fail (outside working directory)
  touch /tmp/outside.txt
  echo "blocked" > /var/tmp/blocked.txt
```

## Ascii Art 

```
Give me some alternatve design options for the menu, use the Ask User Question
```