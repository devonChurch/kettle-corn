#!/bin/bash

echo "copy generic assets"

cp ./src/CNAME ./public
cp ./src/favicon.ico ./public
cp ./src/icon.png ./public
cp ./src/site.webmanifest ./public

if [ $SITE_ENV == "production" ]; then
  
  echo "copy $SITE_ENV specific assets"
  
  cp ./src/robots.txt ./public

elif [ $SITE_ENV == "stage" ]; then

  echo "copy $SITE_ENV specific assets"

  cp ./src/robots-stage.txt ./public/robots.txt

else

  echo "no $SITE_ENV specific assets"

fi
