# TMux Configuration

## Install

See https://github.com/tmux/tmux/wiki/Installing

## Usage

Based on the user config below you can use the following keys:

| Key             | Action                  |
| --------------- | ----------------------- |
| `ctrl+b c`      | New window              |
| `ctrl+b %`      | Split pane horizontally |
| `ctrl+b \|`     | Split pane horizontally |
| `ctrl+b -`      | Split pane vertical     |
| `ctrl+b TAB`    | workmux last agent      |
| `ctrl+b ctrl+s` | workmux dashboard       |

## User Config

```
# ~/.tmux.conf
# tmux configuration file
# This configuration customizes tmux key bindings and settings 
# for improved usability; copy/past, mouse support, etc.

# Reload configuration
# Unbinds the default 'r' key and rebinds it to reload the tmux configuration file
unbind r
bind r source-file ~/.tmux.conf 

# Mouse support
# Enables mouse interaction with tmux panes, windows, and scrolling
set -g mouse on

# History settings
# Sets the scrollback buffer to store 10,000 lines of history per pane
set -g history-limit 10000

# Prefix key configuration
# Changes the default prefix key from Ctrl+b to Ctrl+s for easier access
# unbind C-b
# set -g prefix C-s

# Pane navigation
# Sets up vim-like key bindings for navigating between panes:
# h - move to left pane
# j - move to pane below
# k - move to pane above
# l - move to right pane
bind-key h select-pane -L 
bind-key j select-pane -D 
bind-key k select-pane -U 
bind-key l select-pane -R

# Copy/past to system clipboard
setw    -g  mode-keys    vi
bind-key -T edit-mode-vi Up                send-keys -X history-up
bind-key -T edit-mode-vi Down              send-keys -X history-down
bind-key -T copy-mode-vi v                 send      -X begin-selection
bind-key -T copy-mode-vi [                 send-keys -X begin-selection
bind-key -T copy-mode-vi y                 send-keys -X copy-pipe-and-cancel "pbcopy"
bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "pbcopy"
bind-key -T copy-mode-vi Enter             send-keys -X copy-pipe-and-cancel "pbcopy"
bind-key -T copy-mode-vi ]                 send-keys -X copy-selection

# Open new panes and windows in the current working directory
bind '"' split-window -c "#{pane_current_path}"
bind c new-window -c "#{pane_current_path}"
bind % split-window -h -c "#{pane_current_path}"
bind | split-window -h -c "#{pane_current_path}" # Horizontal split
bind - split-window -v -c "#{pane_current_path}" # Vertical split

# Workmux dashboard popup
bind C-s display-popup -h 30 -w 100 -E "workmux dashboard"
bind Tab run-shell "workmux last-agent"
```