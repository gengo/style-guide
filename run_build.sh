#!/bin/sh -e

if ! bash -c "docker images | grep style-guide-builder"; then
    echo "Please build builder images in advance. Run build/build_scaffold.sh"
    exit 0
fi

docker run --rm -v `pwd`:/srv/style-guide gengo/style-guide-builder bash -c "yarn install; yarn build"
