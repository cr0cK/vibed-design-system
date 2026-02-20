#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Checking for inline style object literals (style={{ ... }})..."

if rg -n "style=\{\{" packages/design-system/src apps/storybook/src; then
  echo
  echo "Inline style object literals were found."
  echo "Use DS props/variants or styled components instead of style={{ ... }}."
  exit 1
fi

echo "No inline style object literals found."
