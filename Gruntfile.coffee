'use strict';

# Build configurations.
module.exports = (grunt) ->

  # load all grunt tasks
  require('jit-grunt')(grunt, {
    usebanner: 'grunt-banner'
  })

  #path configuration
  assetsConfig =
    images : 'img'
    scripts: 'js'
    sass   : 'scss'
    style  : 'css'
    bower  : 'bower_components'

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
          base: 'docs'
          livereload: true

    watch:
      options:
        livereload: true
      sass:
        files: '<%= assets.sass %>/{,*/}*.{scss,sass}'
        tasks: [ 'css-dev' ]
      html_files:
        files: 'docs/{,*/}*.html'

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
            '{,*/}*.css'
            '!{,*/}*.min.css'
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
        compatibility: 'ie8'
        keepSpecialComments: '*'
        noAdvanced: true # turn advanced optimizations off until the issue is fixed in clean-css
      minify:
        expand: true
        cwd: '<%= assets.style %>'
        src: [
          '{,*/}*.css'
          '!{,*/}*.min.css'
        ]
        dest: '<%= assets.style %>'
        ext: '.min.css'

    usebanner:
      options:
        position: 'top'
        banner: '<%= banner %>'
      files:
        src: ['<%= assets.style %>/{,*/}*.css']

    copy:
      bootstrap:
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-sass/vendor/assets/stylesheets'
        src: '{,*/}*.{scss,sass}'
        dest: '<%= assets.sass %>/third_party'
      docs:
        expand: true,
        cwd: ''
        src: [
          '<%= assets.style %>/*'
          'fonts/*'
        ],
        dest: 'docs/assets'
      docassets:
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '{,*}/*.css'
        ],
        dest: 'docs/assets'

    clean:
      dist: [
        # 'dist'
        'docs/assets'
        '<%= assets.style %>/third_party'
      ]

  grunt.registerTask 'css-build', [
    'compass'
    'newer:csslint'
    'autoprefixer'
    'cssmin'
    'usebanner'
  ]
  grunt.registerTask 'css-dev', [
    'compass'
    'newer:csslint'
    'autoprefixer'
    'newer:copy:docassets'
  ]

  grunt.registerTask 'default', [
    'clean'
    'newer:copy:bootstrap'
    'css-build'
    'newer:copy:docs'
  ]

  grunt.registerTask 'dev', [
    'clean'
    'newer:copy'
    'css-dev'
    'connect'
    'watch'
  ]
