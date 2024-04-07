#!/bin/bash

rm -rf build && npm run export

REMOTE_USER=deploy
REMOTE_IP=irvrnt.com
REMOTE_DIR=/home/deploy/root_website
ssh ${REMOTE_USER}@${REMOTE_IP} "mkdir ${REMOTE_DIR}"
rsync -acvzh ./build/* ${REMOTE_USER}@${REMOTE_IP}:${REMOTE_DIR}