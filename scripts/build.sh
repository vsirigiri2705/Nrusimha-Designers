#!/bin/sh
set -eu
mkdir -p dist/.openai dist/server
cp .openai/hosting.json dist/.openai/hosting.json
cp worker/index.js dist/server/index.js
