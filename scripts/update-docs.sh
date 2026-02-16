#!/bin/bash

#############
# This script is building the documentation and push it to the `ghpages` branch.
#
# Usage:
# pnpm update:docs
#############

set -e  # Exit on any error
set -u  # Exit on undefined variables

# check if the repo is dirty
if [[ -n $(git status --porcelain) ]]; then
  echo "The repository is dirty - Please commit your changes before pushing the documentation."
  exit 1
fi

# make `ghpages` branch as the current branch
CURRENT_BRANCH=$(git branch --show-current)
git checkout ghpages
git reset --hard "$CURRENT_BRANCH"
git clean -fd

# build docs (for GitHub pages)
pnpm build:storybook

# After build, verify it succeeded
if [ ! -d "apps/storybook/storybook-static" ]; then
  echo "Build failed - storybook-static directory not found"
  exit 1
fi

# copy the built docs to the root of the `ghpages` branch
mkdir -p docs
mv apps/storybook/storybook-static/* ./docs

# commit and push the docs
CURRENT_HASH=$(git rev-parse HEAD)
git add .
git add docs -f
git commit -m "Update docs from ""$CURRENT_HASH"""
git push -f origin ghpages

# go back on the previous branch and clean
git checkout "$CURRENT_BRANCH"
git clean -fd

