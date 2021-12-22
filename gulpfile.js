const { gulp, src, dest, watch, series} = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require ('gulp-postcss');
const cssnano = require ('cssnano');
const terser = require ('gulp-terser');
const browsersync = require ('browser-sync').create();


// sass task
function scssTask() {
    return src('src/scss/styles.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('public', {sourcemaps: '.'}))
}

// Javascript Task

function jsTask() {
    return src('src/js/script.js', {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('public', {sourcemaps: '.'}))
}

//Browsersync task

function browsersyncServe(cb) {
    browsersync.init(
        {
            server: {
                baseDire: 'src'
            }
        }
    ) 
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task

function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));

}

// Default Gulp task

exports.default = series (
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);

