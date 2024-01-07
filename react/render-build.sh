#!/usr/bin/env bash
# exit on error
set -o errexit

export VITE_API_URL=$RENDER_API_URL
npm install
npm run build  