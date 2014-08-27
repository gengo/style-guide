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
        tasks: [
          'scsslint'
          'compass'
          'newer:csslint'
          'autoprefixer'
          'concat:docs'
          'newer:copy:css-dev'
        ]
      html:
        files: '<%= assets.template %>/**/*.html'
        tasks: [
          'jekyll'
          'validation'
          'newer:copy:html-dev'
        ]
      js:
        files: '<%= assets.scripts %>/**/*.js'
        tasks: [
          'newer:copy:js-dev'
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
        cwd: '<%= assets.style %>'
        src: [
          '**/docs.css'
          '**/gengo.css'
          '**/gengo-bootstrap-theme.css'
        ]
        dest: '<%= assets.style %>'
        ext: '.css'

    concat:
      docs:
        src:[
          '<%= assets.style %>/docs.min.css'
          '<%= assets.style %>/docs.css'
        ]
        dest:'<%= assets.style %>/docs.all.css'

    usebanner:
      options:
        position: 'top'
        banner: '<%= banner %>'
      files:
        src: [
          '<%= assets.style %>/docs.css'
          '<%= assets.style %>/gengo.css'
          '<%= assets.style %>/gengo-bootstrap-theme.css'
        ]

    copy:
      'bootstrap-sass':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-sass-official/vendor/assets/stylesheets'
        src: '**/*.{scss,sass}'
        dest: '<%= assets.sass %>/third_party'
      'bootstrap-fonts':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-docs/dist/fonts'
        src: 'glyphicons-halflings-regular.*'
        dest: '<%= assets.style %>/bootstrap'
      'bootstrap-docs':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-docs/assets/css'
        src: 'docs.min.css'
        dest: '<%= assets.style %>'
      'downloads-dev':
        expand: true,
        cwd: ''
        src: [ 'downloads/**/*' ],
        dest: 'dev/'
      'downloads-dist':
        expand: true,
        cwd: ''
        src: [ 'downloads/**/*' ],
        dest: 'dist/'
      'fonts-images-dev':
        expand: true,
        cwd: ''
        src: [
          'fonts/**/*'
          'images/**/*'
          'favicons/**/*'
        ],
        dest: 'dev/assets/'
      'fonts-images-dist':
        expand: true,
        cwd: ''
        src: [
          'fonts/**/*'
          'images/**/*'
          'favicons/**/*'
        ],
        dest: 'dist/assets/'
      'bootstrap-multiselect-css':
        expand: true
        cwd: '<%= assets.bower %>/bootstrap-multiselect/css'
        src: [
          'bootstrap-multiselect.css'
        ]
        dest: '<%= assets.style %>'
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
        dest: '<%= assets.style %>'
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
        dest: '<%= assets.style %>'
      'select2-js':
        expand:true
        cwd:'<%= assets.bower %>/select2'
        src: 'select2.min.js'
        dest: '<%= assets.scripts %>/vendor'
      'address-css':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/address'
        src: '*.css'
        dest: '<%= assets.style %>'
      'address-js':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/address'
        src: '*.js'
        dest: '<%= assets.scripts %>/vendor'
      'typeheadjs-css':
        expand:true
        cwd:'<%= assets.bower %>/x-editable/dist/inputs-ext/typeaheadjs/lib'
        src: '*.css'
        dest: '<%= assets.style %>'
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
      # copy js for development
      'js-dev':
        expand: true,
        cwd: '<%= assets.scripts %>'
        src: [
          '**/*.js'
        ],
        dest: 'dev/assets/js'
      # copy js for distribution
      'js-dist':
        expand: true,
        cwd: '<%= assets.scripts %>'
        src: [
          '**/*.js'
        ],
        dest: 'dist/assets/js'
      # copy css for development
      'css-dev':
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          'bootstrap/*.*'
          '*.png'
        ],
        dest: 'dev/assets/css'
      # copy css for distribution
      'css-dist':
        expand: true,
        cwd: '<%= assets.style %>'
        src: [
          '*.css'
          'bootstrap/*.*'
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
        src: '<%= assets.html %>/**/*.html'




  grunt.registerTask 'default', [
    'dev'
  ]
  # in development:
  # all resources are generated into dev/
  grunt.registerTask 'copy-3rd-party-resources',[
    'copy:bootstrap-sass'
    'copy:bootstrap-fonts'
    'copy:bootstrap-docs'
    'copy:fonts-images-dev'
    'copy:fonts-images-dist'
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
    'newer:copy:html-dev'
    # copy 3rd party resources
    'copy-3rd-party-resources'
    # preprocess scss into css
    'scsslint'
    'compass'
    'newer:csslint'
    'autoprefixer'
    'concat:docs'
    #copy css/js into dev/
    'newer:copy:css-dev'
    'newer:copy:js-dev'
    #copy font/images into dev/
    'newer:copy:fonts-images-dev'
    'newer:copy:downloads-dev'
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
    'newer:copy:html-dist'
    # copy 3rd party resources
    'copy-3rd-party-resources'
    # preprocess scss into css
    'scsslint'
    'compass'
    'newer:csslint'
    'autoprefixer'
    'cssmin'
    'usebanner'
    'concat:docs'
    'newer:copy:css-dist'
    # js
    'newer:copy:js-dist'
    # other resourses
    'newer:copy:fonts-images-dist'
    'newer:copy:downloads-dist'
  ]
