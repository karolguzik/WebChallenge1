const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const imageMin = require('gulp-imagemin');

function copyHtml() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
}

function style() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}


function scripts() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/scss/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('src/js/*.js').on('change', browserSync.reload);
}

exports.copyHtml = copyHtml;
exports.style = style;
exports.scripts = scripts;
exports.watch = watch;