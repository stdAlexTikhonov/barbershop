"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();


gulp.task("style", function() {
  
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))

    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("outline", function() {
  
  gulp.src("sass/outline.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))

    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["outline", "style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["outline", "style"]);
  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("*.js").on("change", server.reload);
});