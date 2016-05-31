module.exports = function (grunt) {
    grunt.initConfig({

    // define source files and their destinations
    uglify: {
        files: {
            src: 'js/*.js',  // source files mask
            dest: 'js/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },

    clean: {
        js: ['js/*.js', '!js/*.min.js'],
        css: ['css/*.css', '!css/*.min.css']
    },
});

// load plugins
require('time-grunt')(grunt);
require('load-grunt-tasks')(grunt);

// register at least this one task
grunt.registerTask('default', [ 'uglify', 'cssmin', 'clean']);


};
