#! /bin/bash
CLUSTER=$1

# Push image
sudo /opt/google-cloud-sdk/bin/gcloud docker push $IMAGE_NAME:$CIRCLE_SHA1

# Get kubernetes credentials for the cluster 
sudo /opt/google-cloud-sdk/bin/gcloud --quiet container clusters get-credentials $CLUSTER

# kubectl was installed via sudo so permissions are wrong
sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube

# Deploy application
sed "s#<IMAGE_NAME>#$IMAGE_NAME#;s#<IMAGE_TAG>#$CIRCLE_SHA1#" < deployment.yaml.template > deployment.yaml
kubectl apply -f deployment.yaml