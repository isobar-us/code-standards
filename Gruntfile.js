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

    // clean up after the previous build
    clean : {
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

    // watch the file system for new changes
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['content/en/**.*'],
        tasks: ['assemble','copy']
      }
    },

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
          src: ['*.scss'],
          dest: 'css/generated/',
          ext: '.css'
        },
        ],
      }
    },

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
      es: {
        options : {
          data : 'sections/es/build/data.json',
          partials: ['sections/es/*.html']
        },
        files : {
          'es.html' : ['sections/es/build/es.hbs']
        }
      }
    },

    // copy the specified default language to the specified file
    copy : {
      realeaseLanguage : {
        src : standards.defaultLanguage + standards.defaultExt,
        dest : standards.defaultFile + standards.defaultExt
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '127.0.0.1',
          keepalive: true
        }
      }
    }

});

  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-libsass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  // Default task.
  grunt.registerTask('cleanup', ['clean']);
  grunt.registerTask('server', ['connect']);
  grunt.registerTask('default', ['clean', 'sass', 'assemble', 'copy']);
  grunt.registerTask('dev', ['watch']);

};
