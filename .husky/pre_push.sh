#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run check:code-quality
npm run check:tests