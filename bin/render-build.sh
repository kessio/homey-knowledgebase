#!/usr/bin/env bash
# exit on error
set -o errexit

set -x

cd react
npm install
npm run build  

cd ..
bundle install
/opt/render/project/bin/rails db:migrate
/opt/render/project/bin/rails db:seed
