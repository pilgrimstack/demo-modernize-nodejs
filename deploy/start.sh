#!/bin/bash

env=$1

if [ ! -f .env-$env ]; then
  echo "First do:"
  echo "cp env .env-$env"
  echo "then edit variables in .env-$env"
  exit 1
fi

for i in 01 02; do
openstack server create \
  --image "Ubuntu 20.10" \
  --flavor d2-8 \
  --key gw3 \
  --port demo-modernize-$i \
  --net internal \
  --user-data cloud-init.yml \
  --property env=$env \
  --config-drive true \
  --file /home/ubuntu/.env=.env-$env \
  --file /home/ubuntu/init-app.sh=init-app.sh \
  --file /etc/nginx/sites-available/default=default.nginx \
  demo-modernize-$i
done
