const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

function scss() {
  src('./scss/main.scss')
  .pipe(sass())
  .pipe(dest('./css'))
}

function run() {
  browserSync.init({
    server: './'
  })

  watch('./index.html').on('change', browserSync.reload)
  watch('./css/main.css').on('change', browserSync.reload)
  watch('./scss/**/*.scss').on('change', scss)
}

exports.default = parallel(scss, run);