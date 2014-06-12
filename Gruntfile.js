/*global module:false*/
module.exports = function(grunt) {

  'use strict';

  // @todo: move to json file
  var standards = {
    ourLanguages : ['en', 'es', 'nglayout'], // nglayout? just showing my age
    defaultFile : 'index',
    defaultExt : '.html',
    // change this to have the 'index' file be another language
    defaultLanguage : 'en'
  };

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
        files: ['scss/*.scss'],
        tasks: ['compass']
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
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
          data : 'sections/en/build/data.json',
          partials: ['sections/en/*.html']
        },
        files : {
          'en.html' : ['sections/en/build/en.hbs']
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
      },
      // this is a new test layout + new content
      nglayout: {
        options : {
          data : 'content/en/build/data.json'
        },
        src : 'content/en/build/en.hbs',
        dest : 'nglayout.html'
      },
    },

    // copy the specified default language to the specified file
    copy : {
      realeaseLanguage : {
        src : standards.defaultLanguage + standards.defaultExt,
        dest : standards.defaultFile + standards.defaultExt
      }
    }

});

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  // Default task.
  grunt.registerTask('cleanup', ['clean']);
  grunt.registerTask('default', ['clean', 'compass', 'assemble', 'copy']);
  grunt.registerTask('watch', ['watch']);

};
