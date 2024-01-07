#!/usr/bin/env bash
# exit on error
set -o errexit

set -x

cd react
npm install
npm run build  

cd ..
bundle install
bundle exec rake db:migrate
bundle exec rake db:seed
