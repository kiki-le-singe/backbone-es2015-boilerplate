'use strict';

module.exports = {
  babel: {
    entries: 'app/scripts/init.js',
    dev: {
      dest: 'app/scripts/',
      source: 'script.dev.js'
    },
    dist: {
      dest: 'dist/js/',
      concat: 'script.min.js'
    }
  }
};
