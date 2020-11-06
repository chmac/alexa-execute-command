#!/bin/bash

yarn
yarn build
docker build .
