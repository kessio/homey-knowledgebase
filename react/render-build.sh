#!/usr/bin/env bash
# exit on error
set -o errexit

export VITE_API_KEY=$RENDER_API_KEY
npm install
npm run build  