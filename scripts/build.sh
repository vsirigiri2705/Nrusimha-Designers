#!/bin/sh
set -eu
mkdir -p dist/.openai dist/server
cp .openai/hosting.json dist/.openai/hosting.json
# Combine the local image module with the Worker for the single-file Sites artifact.
{
  sed 's/^export const /const /' worker/sample-gallery.js
  sed "/^import { sampleGalleryImages } from '\.\/sample-gallery\.js';$/d" worker/index.js
} > dist/server/index.js
