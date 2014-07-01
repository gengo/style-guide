#!/usr/bin/env bash

export REPO_URL="https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"

git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_NAME"

LAST_COMMIT=$(git log --oneline | head -n 1)

git checkout -B gh-pages

echo "=remove unnecessary files for deployment="
rm -fr bower_components node_modules css docs fonts/ html images js  liquid scss
rm  .* *.*
rm -fr .sass-cache

echo "=move resources to the parent directory="
cd dist
git add --all
mv *.html ../
mv assets ../
mv docs ../
cd ..
rm -fr dist

# make commit


echo "=git status="
git status

echo "=git commit="
echo "message :" $LAST_COMMIT

git add --all .
git commit -q -m "Travis build $TRAVIS_BUILD_NUMBER"

# only when in 'master' branch, git-push-ed
if [[ "$TRAVIS_BRANCH" = "master" ]]; then
  git push -fq $REPO_URL gh-pages 2> /dev/null
fi
