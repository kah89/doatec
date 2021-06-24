#!/bin/sh

set -e

until nc -z -v -w30 mysql 3306; do
  echo "Waiting for database connection..."
  sleep 1
done

yarn run typeorm migration:run

exec "$@"
