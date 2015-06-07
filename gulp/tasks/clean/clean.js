'use strict';

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
// https://www.npmjs.com/package/gulp-clean

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').clean;

gulp.task('clean:dev', function () {
  return gulp.src(config.dev).pipe($.clean());
});
