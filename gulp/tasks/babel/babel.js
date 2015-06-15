'use strict';

// https://www.npmjs.com/package/vinyl-source-stream
// https://www.npmjs.com/package/vinyl-buffer
// https://www.npmjs.com/package/babelify
// https://www.npmjs.com/package/browserify
// https://www.npmjs.com/package/gulp-sourcemaps
  // http://stackoverflow.com/questions/28087674/gulp-browserify-6to5-source-maps
// https://www.npmjs.com/package/gulp-load-plugins

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var config = require('./config').babel;

gulp.task('babelify:dev', function() {
  browserify({entries: config.entries, debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source(config.dev.source))

    .pipe(buffer()) // Useful?

    // .pipe(sourcemaps.init())
    // .pipe($.uglify())
    // .pipe(sourcemaps.write('.')) // writes .map file

    .pipe(gulp.dest(config.dev.dest));
});
