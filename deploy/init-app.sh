#!/bin/bash
env=$(curl -s http://169.254.169.254/openstack/latest/meta_data.json | jq -r .meta.env)

cd ~
git clone https://github.com/pilgrimstack/demo-modernize-nodejs.git

# backend
cd ~/demo-modernize-nodejs/backend
git checkout --force $env
npm install
ln -s ~/.env
npm run develop &

# frontend
cd ~/demo-modernize-nodejs/frontend
npm install
ln -s ~/.env .env.local
while ! lsof -i | grep '\*:1337'; do
  sleep 2
  echo "Waiting for Strapi..."
done
npm run dev &
