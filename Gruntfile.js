/*
 * Generated on 2014-02-21
 * generator-assemble v0.4.9
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      bower: 'bower_components',
      src: 'src',
      dist: 'public'
    },
    sass: {
      options: {
        includePaths: [
          '<%= config.bower %>/bootstrap/scss/',
          '<%= config.bower %>/tether/src/css/'
        ],
        sourceMap: true
      },
      dist: {
        files: {
          '<%= config.dist %>/assets/css/app.css': '<%= config.src %>/styles/app.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer'),
          require('postcss-flexbugs-fixes')
        ]
      },
      dist: {
        src: '<%= config.dist %>/assets/css/*.css'
      }
    },
    watch: {
      sass: {
        files: ['<%= config.src %>/styles/{,*/}*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,json,yml}'],
        tasks: ['assemble']
      },
      copy: {
        files: ['<%= config.src %>/img/*'],
        tasks: ['copy']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    bower_concat: {
      all: {
        dest: '<%= config.dist %>/assets/js/bower.js'
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img/',
          src: '**',
          dest: '<%= config.dist %>/assets/img/',
          filter: 'isFile'
        }]
      },
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'bower_concat',
    'copy',
    'assemble',
    'sass',
    'postcss'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
