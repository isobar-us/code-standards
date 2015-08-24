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
        layout: './src/_layouts/main.hbs'
      },
      en: {
        options : {
          data : 'src/content/en/build/data.json'
        },
        files : {
          'en.html' : ['src/content/en/build/en.hbs']
        }
      },
      /*es: {
        options : {
          data : 'src/content/es/build/data.json'
        },
        files : {
          'es.html' : ['src/content/es/build/es.hbs']
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
      }()),
      assets: ['_assets/**/*']
    },

    // concatenate the js files into one
    concat: {
      js: {
        options: {
          separator: ';',
        },
        files: {
          '_assets/js/main.js': ['src/js/**/*.js','!src/js/vendor/jquery-*min.js']
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
      assets: {
        expand: true,
        cwd: 'src/js/vendor/',
        src: ['jquery*min.js'],
        dest: '_assets/js/vendor/'
      },
      // mat be replaced by imagemin
      images: {
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif,svg,ico}'],
          dest: '_assets/img/'
      },
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
          cwd: 'src/scss/',
          src: ['*.scss', '!js-only.scss'],
          dest: '_assets/css/',
          ext: '.css'
        },
        ],
      }
    },

    // watch the file system for new changes
    watch: {
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['src/_layouts/**.*', 'src/content/en/**/*.*'],
        tasks: ['assemble','copy']
      },
      img: { 
        files: ['src/img/**/*.{png,jpg,gif}'],
        tasks: ['copy:images'] // may be replaced by imagemin
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat', 'uglify', 'copy:assets']
      }
    },

    // minify the js
    uglify: {
      target: {
        files: {
          '_assets/js/main.min.js': ['_assets/js/main.js']
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
