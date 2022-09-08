#!/bin/sh -e

docker run -p 8080:9001 --rm -v `pwd`:/srv/style-guide gengo/style-guide-builder yarn dev
