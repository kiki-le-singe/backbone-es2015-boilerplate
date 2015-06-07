'use strict';

module.exports = {
  babel: {
    src: 'app/scripts/**/*.js',
    dev: {
      dest: 'app/scripts/',
      concat: 'script.dev.js'
    },
    dist: {
      dest: 'dist/js/',
      concat: 'script.min.js'
    }
  }
};
