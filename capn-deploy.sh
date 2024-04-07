npm run export
tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./build/*
caprover deploy -t ./deploy.tar --caproverApp root-static-site --caproverName=caprover-xyno
rm deploy.tar
