#!/bin/bash

git pull
docker rm -f redis-url-short node-url-short
docker-compose up -d --build
