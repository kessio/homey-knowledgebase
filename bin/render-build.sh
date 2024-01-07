#!/usr/bin/env bash
# exit on error
set -o errexit

set -x

bundle install
bundle exec rake db:migrate
bundle exec rake db:seed
