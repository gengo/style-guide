#!/bin/bash

if [[ "$TRAVIS_PULL_REQUEST" == "true" ]]; then
echo "This is a pull request. No deployment will be done.";
  exit 0;
fi

if [[ "$TRAVIS_BRANCH" != "master" ]]; then
echo "This is not a deployable branch.";
  exit 0;
fi

echo "Set up $TRAVIS_REPO_SLUG [via travis] for $GIT_NAME <${GIT_EMAIL}>"
export REPO_URL="https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"

git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_NAME"

LAST_COMMIT=$(git log --oneline | head -n 1)

git checkout -B gh-pages

echo "=== remove unnecessary files for deployment ==="
rm -fr bower_components node_modules css fonts images js docs scss favicons dist
rm .* *.*
rm -fr .sass-cache

echo "=== move resources to the parent directory ==="
cd _gh_pages
git add --all .
mv *.html ../
mv assets ../
mv downloads ../
cd ..
rm -fr _gh_pages

echo "=== git status ==="
git status

echo "=== git commit ==="
echo "message :" $LAST_COMMIT
git add --all .
git commit -q -m "Travis build $TRAVIS_BUILD_NUMBER"
git push -fq $REPO_URL gh-pages 2> /dev/null
