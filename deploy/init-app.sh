#!/bin/bash
env=$(curl -s http://169.254.169.254/openstack/latest/meta_data.json | jq -r .meta.env)

# backend
cd ~
git clone https://github.com/pilgrimstack/demo-modernize-backend.git
cd demo-modernize-backend
git checkout --force $env
npm install
ln -s ~/.env
npm run develop &

# frontend
cd ~
git clone https://github.com/pilgrimstack/demo-modernize-frontend.git
cd demo-modernize-frontend
npm install
ln -s ~/.env .env.local
while ! lsof -i | grep '\*:1337'; do
  sleep 2
  echo "Waiting for Strapi..."
done
npm run dev &
