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

# <new_branch> is created if it doesn’t exist; otherwise, it is reset.
git checkout -B gh-pages

echo "=== git status ==="
git status

echo "=== remove unnecessary files for deployment ==="
rm -rf node_modules css fonts images js docs scss favicons dist
rm -rf .sass-cache

echo "=== move resources to the parent directory ==="
cd _gh_pages
mv *.html ../
mv assets ../
mv downloads ../
cd ..
rm -rf _gh_pages

echo "=== check what files are remaining ==="
ls -la

echo "=== git status ==="
git status

echo "=== git commit ==="
echo "message :" $LAST_COMMIT
git add -A .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"

echo "=== git push ==="
git push --force $REPO_URL gh-pages
