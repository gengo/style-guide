#!/bin/sh -e

docker run --rm -v `pwd`:/srv/style-guide gengo/style-guide-builder bash -c "yarn install; yarn build"
