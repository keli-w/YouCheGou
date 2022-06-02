const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const alias = require('gulp-wechat-weapp-src-alisa');

const SRC_DIR = path.join(__dirname, './src');
const DEST_DIR = path.join(__dirname, './dist');

const STYLES_EXT = `${SRC_DIR}/**/*.{${['css', 'acss', 'less'].join(',')}}`;
const JS_EXT = `${SRC_DIR}/**/*.js`;

const RESOURCES = [
  `${SRC_DIR}/**/*`,
  `!${STYLES_EXT}`,
  `!${JS_EXT}`
];

const ALIAS_CONFIG = {
  '@': path.join(__dirname, 'src')
};

function transpileStyles(cb) {
  gulp
    .src(STYLES_EXT)
    .pipe(less())
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: '.acss'
      })
    )
    .pipe(gulp.dest(DEST_DIR))
    .on('end', cb);
}

function copyFiles(cb) {
  gulp
    .src(RESOURCES)
    .pipe(gulp.dest(DEST_DIR))
    .on('end', cb);
}

function transpileJsImport(cb) {
  return gulp
    .src(JS_EXT)
    .pipe(alias(ALIAS_CONFIG))
    .pipe(gulp.dest(DEST_DIR))
    .on('end', cb);
}

exports.default = gulp.series(copyFiles, transpileStyles, transpileJsImport);
