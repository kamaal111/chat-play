set dotenv-load

# List available commands
default:
    just --list --unsorted --list-heading $'Available commands\n'

# Run dev server
run-dev: initialize-firebase install-modules
    pnpm run dev --host

# Set up dev container. This step runs after building the dev container
post-dev-container-create:
    just .devcontainer/post-create
    just bootstrap

# Bootstrap project
bootstrap: install-modules

[private]
initialize-firebase:
    zsh scripts/setup-app.zsh

[private]
install-modules:
    pnpm i
