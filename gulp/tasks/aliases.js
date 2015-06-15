'use strict';

// https://www.npmjs.com/package/run-sequence

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['serve']);

gulp.task('serve', function(cb) {
  runSequence(
    ['babelify:dev', 'sass:dev'],
    'server',
    'open:server',
    'watch',
    cb);
});
