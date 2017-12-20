#!/bin/bash

if [ $CLOUD_FRONT_ID ]; then
  
  echo "invalidating cache ($CLOUD_FRONT_ID)"
  aws configure set preview.cloudfront true
  aws cloudfront create-invalidation --distribution-id $CLOUD_FRONT_ID --paths "/*"
  
  echo "delay for $DELAY seconds until cache invalidates"
  sleep $DELAY

else

  echo "no cache to invalidate"

fi
