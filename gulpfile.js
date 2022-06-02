const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const SRC_DIR = path.join(__dirname, './src');
const DEST_DIR = path.join(__dirname, './dist');

const STYLES_EXT = `${SRC_DIR}/**/*.{${['css', 'acss', 'less'].join(',')}}`;

const GLOB_CODE_AND_RESOURCES = [
  `${SRC_DIR}/**/*`,
  `!${STYLES_EXT}`
];

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
    .src(GLOB_CODE_AND_RESOURCES)
    .pipe(gulp.dest(DEST_DIR))
    .on('end', cb);
}

exports.default = gulp.series(copyFiles, transpileStyles);
