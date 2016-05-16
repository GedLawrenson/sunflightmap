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

    clean: {
        js: ['js/*.js', '!js/*.min.js']
    },

    watch: {
        js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
    }
});

// load plugins
require('load-grunt-tasks')(grunt);

// register at least this one task
grunt.registerTask('default', [ 'uglify', 'clean']);


};
