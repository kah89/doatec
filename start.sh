#!/bin/bash

set -e

CURRDIR=$(pwd)

rm -rf $CURRDIR/out

cp -r $CURRDIR/back-end $CURRDIR/out

cd $CURRDIR/front-end

if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

mv dist/doa-tech $CURRDIR/out/nginx/public

cd $CURRDIR/out

docker-compose -f docker-compose.prod.yml up --build -d
