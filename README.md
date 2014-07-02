Gengo Style Guide
===========

## Setup

1. [Download](http://editorconfig.org/#download) & install [EditorConfig](http://editorconfig.org/) plugin for your editor so we have consistency in our code.
2. Install [NodeJS](http://nodejs.org/)
3. Installing dependencies `bash setup.sh` (this will isntall [sass](http://sass-lang.com/), [compass](http://compass-style.org/), [grunt](http://gruntjs.com/) & [bower](http://bower.io/))

4. If you are using [Sublime Text 3](http://www.sublimetext.com/3) then install this plug-in [sublime-csscomb](https://github.com/csscomb/sublime-csscomb). CSScomb is a coding style formatter for CSS. This is the CSScomb setting file [.csscomb.json](https://github.com/gengo/style-guide/blob/master/scss/.csscomb.json)


## Development

- use `grunt dev`
 - contents are generated into `./dev` directory
 - access [http://0.0.0.0:9001](http://0.0.0.0:9001) for preview
 - livereload is supported

## Build

- use `grunt dist`
 - contents are generated into `./dist` directory



## Auto Deployment via Travis CI

- All resources are deployed to `gh-pages` branch from `dist` folder on the `master` branch
- Deployment to `gh-pages` branch are done via [Travis CI](https://travis-ci.org/gengo/style-guide)

- Only when pushed into `master` branch, deployment is enabled.

## How to test auto deployment ? 


###requirement

1. [Travis CI Client](https://github.com/travis-ci/travis.rb)
2. [github personal api tokens](https://github.com/blog/1509-personal-api-tokens)

###instruction


1. `fork` [gengo/style-guide](https://github.com/gengo/style-guide)

2. `git clone` forked repository.


3. move into root directory of the repository.

4. If needed, `merge` branch which  you want to test.

5. open `.travis.yml`, delete last line which start with `- secure:`

6. run `travis encrypt` with adequate options, to replace some environment variables
 - `GH_TOKEN`,`GIT_NAME`,`GIT_EMAIL` are replaced
 - run `travis encrypt`
 - see exmample below.

7. Enable your repository in [Travis CI](https://travis-ci.org/profile/vwxyz)

8. `git add .travis.yml` and `commit`,`push`

9. check Dashboard of Travis CI.

```
# example: git clone

git clone git@github.com:vwxyz/style-guide.git

# example travis encrypt
# - `XXXXXXXXXXX` is your github personal api tokens)
# - by `--add` option, `.travis.yml` is auto-updated.

travis encrypt --add -r gengo/style-guide 'GIT_NAME="vwxyz [via travis key]" GIT_EMAIL=feeddcit@gmail.com GH_TOKEN=XXXXXXXXXXX'
```

## Code snippet highlighting

To render a code block with syntax highlighting, surround your code like this:

```
{% highlight html %}
<ul class="nav nav-tabs">
  <li class="active"><a href="#">Home</a></li>
  <li><a href="#">Profile</a></li>
  <li><a href="#">Messages</a></li>
</ul>
{% endhighlight %}
```

This `{% highlight html %}...{% endhighlight %}` block is converted into this:

```
<div class="highlight">
   <pre><code class="html"><span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"nav nav-tabs"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"active"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Profile<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Messages<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span></code></pre>
</div>
```

- [Templates](http://jekyllrb.com/docs/templates/#code-snippet-highlighting)
- [Liquid basics - Shopify Themes](http://docs.shopify.com/themes/liquid-basics)

## Documentation

For more detailed documentation, please look at : [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
