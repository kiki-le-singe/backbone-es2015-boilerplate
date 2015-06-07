'use strict';

// https://www.npmjs.com/package/run-sequence

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('./config').watch;

// gulp.task('watch', ['css-watch', 'hbs-watch']);

// gulp.task('css-watch', function () {
//   gulp.watch(config.scss, ['sass:dev']);
// });
//
// gulp.task('hbs-watch', function () {
//   gulp.watch(config.hbs, ['handlebars']);
// });

gulp.task('watch', ['js-watch']);

gulp.task('js-watch', function () {
  gulp.watch(config.js, ['babelify:dev']);
});
