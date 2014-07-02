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
      'bootstrap-docs':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap/assets/css'
        src: '*.*.css'
        dest: '<%= assets.style %>'
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
      # copy js for development
      'js-dev':
        expand: true,
        cwd: '<%= assets.scripts %>'
        src: [
          '*.js'
        ],
        dest: 'dev/assets/js'
      # copy js for distribution
      'js-dist':
        expand: true,
        cwd: '<%= assets.scripts %>'
        src: [
          '*.js'
        ],
        dest: 'dist/assets/js'
      # copy css for development
      'css-dev':
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          # '!*.min.css'
        ],
        dest: 'dev/assets/css'
      # copy css for distribution
      'css-dist':
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          # '*.min.css'
        ],
        dest: 'dist/assets/css'
      # copy html for development
      'html-dev':
        expand: true,
        cwd: '<%= assets.html %>'
        src: [
          '*.html'
        ],
        dest: 'dev'
      # copy htmls for distribution
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
    # generate htmls with _config.yml
    jekyll:
      dist:
        options:
          config:'_config.yml'




  grunt.registerTask 'default', [
    'dev'
  ]
  # in development:
  # all resources are generated into dev/

  grunt.registerTask 'dev', [
    'clean'
    # html
    'jekyll'
    'newer:copy:html-dev'
    # css
    'newer:copy:bootstrap'
    'newer:copy:bootstrap-docs'
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

  # generate all resources for gh-pages

  grunt.registerTask 'dist', [
    'clean'
    # html
    'jekyll'
    'newer:copy:html-dist'
    # css + optimize
    'newer:copy:bootstrap'
    'newer:copy:bootstrap-docs'
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
