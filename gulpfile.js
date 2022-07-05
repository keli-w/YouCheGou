const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const alias = require('gulp-wechat-weapp-src-alisa');
const del = require('del');

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

async function clean(cb) {
  await del([DEST_DIR]);
  cb();
}

function build(cb) {
  cb();
  return gulp.series(clean, gulp.parallel(copyFiles, transpileStyles, transpileJsImport));
}

function watch(cb) {
  const watchOptions = {
    ignoreInitial: false
  };
  gulp.watch(SRC_DIR, watchOptions, build(cb));
  cb();
}

exports.build = (cb) => {
  build(cb);
};

exports.clean = clean;

exports.watch = watch;
