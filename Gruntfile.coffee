'use strict';

# Build configurations.
module.exports = (grunt) ->
  require('time-grunt')(grunt)
  # load all grunt tasks
  require('jit-grunt')(grunt, {
    usebanner: 'grunt-banner'
    scsslint: 'grunt-scss-lint'
    validation: 'grunt-html-validation'
  })

  #path configuration
  assetsConfig =
    images  : 'images'
    scripts : 'js'
    sass    : 'scss'
    css     : 'dist/css'
    bower   : 'bower_components'
    gh_pages: '_gh_pages'
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
            ' * \n' +
            ' * update: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' */\n'

    usebanner:
      options:
        position: 'top'
        banner: '<%= banner %>'
      files:
        src: [
          '<%= assets.css %>/docs.css'
          '<%= assets.css %>/gengo.css'
          '<%= assets.css %>/gengo-bootstrap-theme.css'
        ]

    connect:
      server:
        options:
          port: 9001
          base: '<%= assets.gh_pages %>'
          livereload: true

    watch:
      options:
        livereload: true
      sass:
        files: '<%= assets.sass %>/**/*.{scss,sass}'
        tasks: [
          'scsslint'
          'compass'
          'newer:csslint'
          'autoprefixer'
          'concat:docs'
        ]
      html:
        files: '<%= assets.template %>/**/*.html'
        tasks: [
          'jekyll'
          'validation'
        ]
      js:
        files: '<%= assets.scripts %>/**/*.js'
        tasks: []

    compass:
      options:
        specify  : '<%= assets.sass %>/*.{scss,sass}'
        sassDir  : '<%= assets.sass %>'
        imagesDir: '<%= assets.images %>'
        cssDir   : '<%= assets.css %>'
        relativeAssets: true
      prod:
        options:
          debugInfo: false
          outputStyle: 'expanded'
          noLineComments: true

    autoprefixer:
      options:
        cascade: true
        browsers: [
          'Android 2.3'
          'Android >= 4'
          'Chrome >= 20'
          'Firefox >= 24' # Firefox 24 is the latest ESR
          'Explorer >= 8'
          'iOS >= 6'
          'Opera >= 12'
          'Safari >= 6'
        ]

      build:
        files: [{
          expand: true
          cwd: '<%= assets.css %>'
          src: [
            '**/*.css'
            '!**/*.min.css'
          ]
          dest: '<%= assets.css %>'
        }]

    csscomb:
      options:
        config: '<%= assets.sass %>/.csscomb.json'
      dist:
        expand: true,
        cwd: '<%= assets.css %>'
        src: [
          '*.css'
          '!*.min.css'
        ]
        dest: '<%= assets.css %>'

    csslint:
      options:
        csslintrc: '<%= assets.sass %>/.csslintrc'
      src:
        '<%= assets.css %>/<%= pkg.name %>.css'

    scsslint:
      allFiles: ['scss/*.scss']
      options:
        config: '.scss-lint.yml'

    cssmin:
      options:
        compatibility: 'ie8'
        keepSpecialComments: '*'
        noAdvanced: true
      minify:
        expand: true
        cwd: '<%= assets.css %>'
        src: [
          '**/docs.css'
          '**/gengo.css'
          '**/gengo-bootstrap-theme.css'
        ]
        dest: '<%= assets.css %>'
        ext: '.css'

    concat:
      docs:
        src:[
          '<%= assets.css %>/docs.min.css'
          '<%= assets.css %>/docs.css'
        ]
        dest:'<%= assets.css %>/docs.all.css'
      vendor:
        src:[
          '<%= assets.scripts %>/vendor/moment.min.js'
          '<%= assets.scripts %>/vendor/bootstrap-editable.min.js'
          '<%= assets.scripts %>/vendor/bootstrap-multiselect.js'
          '<%= assets.scripts %>/vendor/select2.min.js'
          '<%= assets.scripts %>/vendor/typeaheadjs.js'
          '<%= assets.scripts %>/vendor/typeahead.js'
          '<%= assets.scripts %>/vendor/address.js'
        ]
        dest:'<%= assets.scripts %>/vendor.js'

    copy:
      ##############################################
      # Copy all vendor related assets
      ##############################################
      'bootstrap-sass':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-sass-official/assets/stylesheets'
        src: '**/*.{scss,sass}'
        dest: '<%= assets.sass %>/third_party'
      'bootstrap-fonts':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-docs/dist/fonts'
        src: 'glyphicons-halflings-regular.*'
        dest: '<%= assets.css %>/bootstrap'
      'bootstrap-docs':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-docs/assets/css'
        src: 'docs.min.css'
        dest: '<%= assets.css %>'
      'bootstrap-multiselect-css':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-multiselect/css'
        src: [
          'bootstrap-multiselect.css'
        ]
        dest: '<%= assets.css %>'
      'bootstrap-multiselect-js':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-multiselect/js'
        src: [
          'bootstrap-multiselect.js'
        ]
        dest: '<%= assets.scripts %>/vendor'
      'x-editable-css':
        expand: true
        cwd: '<%= assets.bower %>/x-editable/dist/bootstrap3-editable/css'
        src: [
          'bootstrap-editable.css'
        ]
        dest: '<%= assets.css %>'
      'x-editable-js':
        expand: true
        cwd: '<%= assets.bower %>/x-editable/dist/bootstrap3-editable/js'
        src: [
          'bootstrap-editable.min.js'
        ]
        dest: '<%= assets.scripts %>/vendor'
      'x-editable-img':
        expand: true
        cwd: '<%= assets.bower %>/x-editable/dist/bootstrap3-editable/img'
        src: '*.*'
        dest: '<%= assets.images %>'
      'select2-css':
        expand:true
        cwd:'<%= assets.bower %>/select2'
        src: [
          'select2*.css'
          'select2*.png'
        ]
        dest: '<%= assets.css %>'
      'select2-js':
        expand:true
        cwd:'<%= assets.bower %>/select2'
        src: 'select2.min.js'
        dest: '<%= assets.scripts %>/vendor'
      'address-css':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/address'
        src: '*.css'
        dest: '<%= assets.css %>'
      'address-js':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/address'
        src: '*.js'
        dest: '<%= assets.scripts %>/vendor'
      'typeheadjs-css':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/typeaheadjs/lib'
        src: '*.css'
        dest: '<%= assets.css %>'
      'typeheadjs-js':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/typeaheadjs/'
        src: [
          'lib/*.js'
          '*.js'
        ]
        flatten:true
        dest: '<%= assets.scripts %>/vendor'
      'moment':
        expand:true
        cwd:'<%= assets.bower %>/moment/min'
        src: 'moment.min.js'
        dest: '<%= assets.scripts %>/vendor'

      ##############################################
      # Copy assets for _gh_pages
      ##############################################
      'fonts-images':
        expand: true,
        cwd: ''
        src: [
          'fonts/**/*'
          'images/**/*'
          'js/**/*'
          'favicons/**/*'
        ],
        dest: 'dist/'
      'gh_pages':
        expand: true,
        cwd: 'dist/'
        src: [
          '**/*'
        ],
        dest: '<%= assets.gh_pages %>/assets'

    clean:
      dist: [
        'dist'
        '_gh_pages'
      ]
      vendor: [
        '<%= assets.scripts %>/vendor/**/*.js'
      ]

    # generate htmls with _config.yml
    jekyll:
      dist:
        options:
          config:'_config.yml'

    validation:
      options:
        charset: 'utf-8'
        doctype: 'HTML5'
        failHard: true
        reset: true
        relaxerror: [
          'Bad value X-UA-Compatible for attribute http-equiv on element meta.'
          'Element img is missing required attribute src.'
          'Attribute autocomplete not allowed on element input at this point.'
          'The element input must not appear as a descendant of the a element.'
          'The element label must not appear as a descendant of the a element.'
        ]
      files:
        src: '<%= assets.gh_pages %>/**/*.html'




  grunt.registerTask 'default', [
    'dev'
  ]
  # in development:
  # all resources are generated into dev/
  grunt.registerTask 'copy-3rd-party-resources',[
    'copy:bootstrap-sass'
    'copy:bootstrap-fonts'
    'copy:bootstrap-docs'
    'copy:bootstrap-multiselect-css'
    'copy:bootstrap-multiselect-js'
    'copy:x-editable-css'
    'copy:x-editable-js'
    'copy:x-editable-img'
    'copy:select2-css'
    'copy:select2-js'
    'copy:address-css'
    'copy:address-js'
    'copy:typeheadjs-css'
    'copy:typeheadjs-js'
    'copy:moment'
  ]

  grunt.registerTask 'dev', [
    'clean'
    # html
    'jekyll'
    'validation'
    # copy 3rd party resources
    'copy-3rd-party-resources'
    # preprocess scss into css
    'scsslint'
    'compass'
    'newer:csslint'
    'autoprefixer'
    # concat
    'concat:docs'
    'concat:vendor'
    'clean:vendor'
    # copy
    'copy:fonts-images'
    'copy:gh_pages'
    # start development env
    'connect'
    'watch'
  ]

  # generate all resources for gh-pages

  grunt.registerTask 'dist', [
    'clean'
    # html
    'jekyll'
    'validation'
    # copy 3rd party resources
    'copy-3rd-party-resources'
    # preprocess scss into css
    'scsslint'
    'compass'
    'newer:csslint'
    'autoprefixer'
    'cssmin'
    'usebanner'
    # concat
    'concat:docs'
    'concat:vendor'
    'clean:vendor'
    # copy
    'copy:fonts-images'
    'copy:gh_pages'
  ]
