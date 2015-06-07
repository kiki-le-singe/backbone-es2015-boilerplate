'use strict';

// https://www.npmjs.com/package/gulp-babel
// https://www.npmjs.com/package/gulp-concat

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').babel;

gulp.task('babelify:dev', ['clean:dev'], function () {
  return gulp.src(config.src)
    .pipe($.babel())
    .pipe($.concat(config.dev.concat))
    .pipe(gulp.dest(config.dev.dest));
});
