#!/bin/bash

echo "Wellcome to my installer!"

cd ./build

docker network inspect microservice_example >/dev/null 2>&1 || \
    docker network create --driver bridge microservice_example

docker compose -f database.yml -f broker.yml -f services.yml up -d
docker exec build-broker-service-1 npm run migration:run

cd ..