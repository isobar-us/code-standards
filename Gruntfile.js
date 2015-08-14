/*global module:false*/
module.exports = function(grunt) {

  'use strict';

  // @todo: move to json file
  var standards = {
    ourLanguages : ['en', 'es'],
    defaultFile : 'index',
    defaultExt : '.html',
    // change this to have the 'index' file be another language
    defaultLanguage : 'en'
  };

  // output build time stats
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // combine our files into one file, language by language
    assemble: {
      options: {
        marked: {
          sanitize: false
        },
        flatten : true,
        layout: './_layouts/main.hbs'
      },
      en: {
        options : {
          data : 'content/en/build/data.json'
        },
        files : {
          'en.html' : ['content/en/build/en.hbs']
        }
      },
      /*es: {
        options : {
          data : 'content/es/build/data.json'
        },
        files : {
          'es.html' : ['content/es/build/es.hbs']
        }
      },*/
    },

    // clean up after the previous build
    clean: {
      build : (function(){
        var arr = [];

          // we iterate over the languages and create our list of output files
          standards.ourLanguages.forEach(function(val){
            arr.push(val + standards.defaultExt);
          });

          // add the default file to the list since it will be replaced by "copy"
          arr.push(standards.defaultFile + standards.defaultExt);

        return arr;
      }())
    },

    // concatenate the js files into one
    concat: {
      js: {
        options: {
          separator: ';',
        },
        files: {
          'js/generated/main.js': ['js/main-vendor/*.js', 'js/main-custom/*.js']
        }
      }
    },

    // connect to the local server
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '127.0.0.1',
          keepalive: true
        }
      }
    },

    // copy the specified default language to the specified file
    copy: {
      realeaseLanguage : {
        src : standards.defaultLanguage + standards.defaultExt,
        dest : standards.defaultFile + standards.defaultExt
      }
    },

    // run sass to generate the css
    sass: {
      global: {
        options: {
          sourceMap: true,
          sourceComments: false,
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ['*.scss', '!js-only.scss'],
          dest: 'css/generated/',
          ext: '.css'
        },
        ],
      }
    },

    // watch the file system for new changes
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['_layouts/**.*', 'content/en/**/*.*', 'sections/es/**/*.*'],
        tasks: ['assemble','copy']
      },
      js: {
        files: ['js/main-custom/*.js', 'js/main-vendor/*.js'],
        tasks: ['concat', 'uglify']
      }
    },

    // minify the js
    uglify: {
      my_target: {
        files: {
          'js/generated/main.min.js': ['js/generated/main.js']
        }
      }
    }

});

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('assemble');

  // Default task.
  grunt.registerTask('cleanup', ['clean']);
  grunt.registerTask('server', ['connect']);
  grunt.registerTask('default', ['clean', 'sass', 'concat', 'uglify', 'assemble', 'copy']);
  grunt.registerTask('dev', ['watch']);

};
