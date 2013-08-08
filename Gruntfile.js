/*global module:false*/
module.exports = function(grunt) {
    var metas = {
        en: {
            path: 'sections/en/',
            files: ['_front_matter.txt', 'general.html', 'markup.html', 'css.html', 'javascript.html', 'performance.html', 'browsers.html', 'seo.html', 'codeReviews.html', 'appendices.html', 'revisionHistory.html']
        }
    }

    function addBasePaths(basePath, fileArray){
        var output = [];

            fileArray.forEach(function(i){
                output.push(basePath + i);
                grunt.log.write("Including base path: " + basePath + i + '\n');//logging for debugging
            });
            
        return output;
    };
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      dist: {
            src: ((function(){
                var files = [];
      
                files = addBasePaths(metas.en.path, metas.en.files);

                return files;

            })()),
           dest: 'index.html'
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['compass']
      },
      html: {
        files: ['sections/en/*.html'],
        tasks: ['concat']
      },
      jekyll: {
        files: ['index.html', '_layouts/*.html'],
        tasks: ['jekyll']
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    /*todo: setup jekyll build to serve index.html*/
    jekyll: {                             // Task
      options: {                          // Universal options
          bundleExec: true,
          config: '_config.yml'
      },
      build: {                            
        options: {
          drafts: false
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task.
  grunt.registerTask('default', ['concat', 'compass', 'jekyll']);

};
