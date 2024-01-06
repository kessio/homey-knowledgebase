#!/usr/bin/env bash
# exit on error
set -o errexit

set -x

cd react
npm install
npm run build  

cd ..
bundle install
./bin/rails db:migrate
./bin/rails db:seed
