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
//js
const nunjucks = require("gulp-nunjucks"),
    data = require("gulp-data"),
    nunjucksRender = require('gulp-nunjucks-render');
//handlebars = require('gulp-handlebars'),

//src locations
var paths = {
  html: {
    //pages used for storing file that will be complied in to html
    pages: "app/pages/**/*.+(html|njk)",
    // templates is used for storing all Nunjuck files
    template: "app/templates",
    partials: "app/templates/partials",
    dest: "app"
  },
  style: {
    src: "app/scss/**/*.scss",
    dest: "app/style"
  }
};


function htmlTemp() {
  return gulp
    .src('app/pages/**/*.+(html|njk)')
    .pipe(data(function(){
      return require('./app/data.json')
    }))
    .pipe(nunjucksRender({
      path: ['app/templates/']
    }))
    .pipe(gulp.dest('app'));
}


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
 // gulp.watch(paths.html.src, htmlTemp)
  gulp.watch(paths.style.src, style);
}

exports.watch = watch;
exports.htmlTemp = htmlTemp;



//var build = gulp.parallel(style, htmlTemp, watch)
//gulp.task(build);
//gulp.task