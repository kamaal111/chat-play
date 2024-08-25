set export
set dotenv-load

SERVER_PORT := "3000"
VITE_API_BASE_URL := "http://127.0.0.1:" + SERVER_PORT

# List available commands
default:
    just --list --unsorted --list-heading $'Available commands\n'

# Run dev server
run-dev: initialize-firebase install-modules
    pnpm run dev

# Format
format:
    pnpm run format

# Start firebase emulators
start-firebase-emulator:
    pnpm exec firebase emulators:start

# Firebase login
firebase-login:
    pnpm exec firebase login

# Firebase deploy
firebase-deploy:
    pnpm exec firebase deploy

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
    echo Y | pnpm i
