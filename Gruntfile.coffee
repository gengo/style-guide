'use strict';

# Build configurations.
module.exports = (grunt) ->
  require('time-grunt')(grunt)
  # load all grunt tasks
  require('jit-grunt')(grunt, {
    usebanner: 'grunt-banner'
  })

  #path configuration
  assetsConfig =
    images  : 'img'
    scripts : 'js'
    sass    : 'scss'
    style   : 'css'
    bower   : 'bower_components'
    html    : 'html'
    template: 'liquid'

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    assets: assetsConfig
    banner: '/*!\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' *'+
            ' * Licensed under the Apache License, Version 2.0 (the "License");\n' +
            ' * you may not use this file except in compliance with the License.\n' +
            ' * You may obtain a copy of the License at :\n' +
            ' * http://www.apache.org/licenses/LICENSE-2.0\n' +
            ' */\n'

    connect:
      server:
        options:
          port: 9001
          base: 'dev'
          livereload: true

    watch:
      options:
        livereload: true
      sass:
        files: '<%= assets.sass %>/**/*.{scss,sass}'
        tasks: [ 'cssdev' ]
      html:
        files: [
          '<%= assets.template %>/_includes/*.html'
          '<%= assets.template %>/_layouts/*.html'
          '<%= assets.template %>/_includes/**/*.html'
          '<%= assets.template %>/*.html'
        ]
        tasks: [
          'jekyll'
          'newer:copy:html-dev'
        ]

    compass:
      options:
        specify  : '<%= assets.sass %>/*.{scss,sass}'
        sassDir  : '<%= assets.sass %>'
        imagesDir: '<%= assets.images %>'
        cssDir   : '<%= assets.style %>'
        relativeAssets: true
      prod:
        options:
          debugInfo: false
          outputStyle: 'expanded'
          noLineComments: true

    autoprefixer:
      options:
        cascade: true
        browsers: ["> 1%", 'last 2 version', 'ie >= 8']
      build:
        files: [{
          expand: true
          cwd: '<%= assets.style %>'
          src: [
            '**/*.css'
            '!**/*.min.css'
          ]
          dest: '<%= assets.style %>'
        }]

    csscomb:
      options:
        config: '<%= assets.sass %>/.csscomb.json'
      dist:
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          '!*.min.css'
        ]
        dest: '<%= assets.style %>'

    csslint:
      options:
        csslintrc: '<%= assets.sass %>/.csslintrc'
      src:
        '<%= assets.style %>/<%= pkg.name %>.css'

    cssmin:
      options:
        keepSpecialComments: '*'
      minify:
        expand: true
        cwd: '<%= assets.style %>'
        src: [
          '**/*.css'
          '!**/*.min.css'
        ]
        dest: '<%= assets.style %>'
        ext: '.min.css'

    usebanner:
      options:
        position: 'top'
        banner: '<%= banner %>'
      files:
        src: ['<%= assets.style %>/**/*.css']

    copy:
      bootstrap:
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-sass-official/vendor/assets/stylesheets'
        src: '**/*.{scss,sass}'
        dest: '<%= assets.sass %>/third_party'
      'fonts-images-dev':
        expand: true,
        cwd: ''
        src: [
          'fonts/*'
          'images/*'
        ],
        dest: 'dev/assets/'
      'fonts-images-dist':
        expand: true,
        cwd: ''
        src: [
          'fonts/*'
          'images/*'
        ],
        dest: 'dist/assets/'
      # dev用にjsコピー
      'js-dev':
        expand: true,
        cwd: '<%= assets.scripts %>'
        src: [
          '*.js'
        ],
        dest: 'dev/assets/js'
      # ビルド用にjsコピー
      'js-dist':
        expand: true,
        cwd: '<%= assets.scripts %>'
        src: [
          '*.js'
        ],
        dest: 'dist/assets/js'
      # dev用にcssコピー
      'css-dev':
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          # '!*.min.css'
        ],
        dest: 'dev/assets/css'
      # ビルド用にcssコピー
      'css-dist':
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          # '*.min.css'
        ],
        dest: 'dist/assets/css'
      # dev用にhtmlコピー
      'html-dev':
        expand: true,
        cwd: '<%= assets.html %>'
        src: [
          '*.html'
        ],
        dest: 'dev'
      # ビルド用にhtmlコピー
      'html-dist':
        expand: true,
        cwd: '<%= assets.html %>'
        src: [
          '*.html'
        ],
        dest: 'dist'

    clean:
      dist: [
        'dist'
        'dev'
        'html'
        'css'
      ]
    # _config.ymlの設定通りにhtml生成
    jekyll:
      dist:
        options:
          config:'_config.yml'


  # 外部リソースの更新のとき

  grunt.registerTask 'default', [
    'clean'
    'newer:copy:bootstrap'
    'css-build'
    'newer:copy:docs'
  ]

  # 開発時。ローカルサーバたてる。watch

  grunt.registerTask 'dev', [
    'clean'
    # html
    'jekyll'
    'newer:copy:html-dev'
    # css
    'compass'
    'newer:csslint'
    'autoprefixer'
    'newer:copy:css-dev'
    # js
    'newer:copy:js-dev'
    # other resourses
    'newer:copy:fonts-images-dev'
    'connect'
    'watch'
  ]

  # gh-page用にpush

  grunt.registerTask 'dist', [
    'clean'
    # html
    'jekyll'
    'newer:copy:html-dist'
    # css + optimize
    'compass'
    'newer:csslint'
    'autoprefixer'
    'cssmin'
    'usebanner'
    'newer:copy:css-dist'
    # js
    'newer:copy:js-dist'
    # other resourses
    'newer:copy:fonts-images-dist'
  ]
