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

uncss: {
  dist: {
    files: {
      'css/stylesheet.css': ['index.php']
    }
  }
},

    watch: {
        js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-uncss');

// register at least this one task
grunt.registerTask('default', [ 'uglify', 'clean', 'uncss']);


};
