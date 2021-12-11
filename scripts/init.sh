#!/bin/bash

set -eu

rm .github/dependabot.yml
rm -rf .git

yarn install

git init
git commit -m "init"
