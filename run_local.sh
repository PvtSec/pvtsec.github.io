#!/bin/bash

docker build -f Dockerfile . -t vite-app
docker stop vite-app || true
docker run --rm --name vite-app -p 8080:80 -d vite-app