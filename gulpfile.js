"use strict";
//Gulp.js config

const gulp = require("gulp");
//css, scss
const sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  assets = require("postcss-assets"),
  autoprefixer = require("autoprefixer"),
  mqpacker = require("css-mqpacker"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps");

//src locations
var paths = {
  style: {
    src: "app/scss/**/*.scss",

    dest: "app/style"
  }
};

function style() {
  return gulp
    .src(paths.style.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.style.dest));
}

function watch() {
  style();
  gulp.watch(paths.style.src, style);
}

exports.watch = watch;
