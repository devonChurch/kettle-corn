#!/bin/bash

echo "copy generic assets"

cp ./src/CNAME ./public
cp ./src/favicon.ico ./public
cp ./src/icon.png ./public
cp ./src/site.webmanifest ./public

if [ $APP_ENV == "production" ]; then
  
  echo "copy $APP_ENV specific assets"
  
  cp ./src/robots.txt ./public

elif [ $APP_ENV == "stage" ]; then

  echo "copy $APP_ENV specific assets"

  cp ./src/robots-stage.txt ./public/robots.txt

else

  echo "no $APP_ENV specific assets"

fi
