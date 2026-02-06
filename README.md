# euri-demo-pr-review

A React-based demo application for best AI practices, built with Vite, TypeScript, and TailwindCSS. 

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev 

# Build for production
bun build

# Preview production build
bun preview

# Run linting
bun lint
```

## 🛠️ Tech Stack

- [React](https://react.dev/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Routing

## Multi Agents Workflow Support

This project has support for the following multi-agents workflows:

### Cursor (see .cursor/worktrees.json)

Config see .cursor/worktrees.json

You can select 'Local', 'Worktree' or 'Cloud' when creating an agent.
When selecting 'Worktree' following commands are executed after the worktree is created:

```bash
# allow direnv permission
direnv allow

# install dependencies
bun install

# copy .env file from root worktree to the worktree
cp $ROOT_WORKTREE_PATH/.env .env
```

This will allow the agent to run npm scrips with the correct environment variables.

### Conductor (see conductor.json)

### Worktrunk (see ./config/wt.toml)

```bash
# create new worktree
worktrunk add switch --create add-user-list

# remove worktree
worktrunk remove
```

### Workmux (see .workmux.yaml)

The workmux workflow support auto port allocation for the vite server, using `direnv`

```bash
# open tmux
tmux

# create new worktree
workmux add add-user-list

# remove worktree
workmux remove
```

# Prime the AI

```
Read README.md, CLAUDE.md, and run `git ls-files` to understand this codebase.
```
