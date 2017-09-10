var paths = {
    js: {
        app: 'app/js/concat/*.js',
        dist: 'dist/js',
        build: 'build/js',
        map: '../maps',
    },
    css: {
        app: 'app/css/*.css'
    },
    scss: {
        app: 'app/scss/*.scss',
        dist: 'dist/css',
        build: 'build/css',
        map: '../maps'
    },
    html: {
        app: 'app/*.pug',
        dist: 'dist/',
        build: 'build/',
    },
    img: {
        app: ['app/images/**/*.jpg', 'app/images/**/*.png', 'app/images/**/*.gif', 'app/images/**/*.svg'],
        dist: 'dist/images/',
        build: 'build/images/',
    },
    copy: {
        font: {
            app: 'app/fonts/*',
            dist: 'dist/fonts',
            build: 'build/fonts',
        },
        js: {
            app: 'app/js/*.js',
            dist: 'dist/js',
            build: 'build/js',
        }
    }
};

var prefixer = {
    browsers: [
        '> 5%',
        'last 2 versions',
        'firefox >= 18',
        'Chrome >= 21',
        'safari >= 6.1',
        'Opera >= 17',
        'IE >= 10',
        'IE 11'
    ],
    cascade: false
};
var imgMin = {
    interlaced: true,
    progressive: true,
    optimizationLevel: 5,
    svgoPlugins: [{ removeViewBox: true }]
};

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

var plugins = require('gulp-load-plugins')();
var $ = plugins;

$.browserSync = require('browser-sync');
$.strip = require('gulp-strip-comments');
$.htmlbeautify = require('gulp-html-beautify');
$.merge = require('merge-stream');
// Log Errors

$.errorlog = function errorlog(err) {
    console.error(err.message);
    this.emit('end');
}



// SCSS Tasks
gulp.task('scss', require('./gulp-tasks/scss').dist(gulp, $, paths, prefixer));
gulp.task('build:scss', require('./gulp-tasks/scss').build(gulp, $, paths, prefixer));

// CSS Task
gulp.task('css', require('./gulp-tasks/css').dist(gulp, $, paths));
gulp.task('build:css', require('./gulp-tasks/css').build(gulp, $, paths));

// Script Tasks
gulp.task('js', require('./gulp-tasks/script').dist(gulp, $, paths));
gulp.task('build:js', require('./gulp-tasks/script').build(gulp, $, paths));

// pug
gulp.task('pug', require('./gulp-tasks/pug').dist(gulp, $, paths));
gulp.task('build:pug', require('./gulp-tasks/pug').build(gulp, $, paths));

// img min
gulp.task('img', require('./gulp-tasks/img').dist(gulp, $, paths, imgMin));
gulp.task('build:img', require('./gulp-tasks/img').build(gulp, $, paths, imgMin));

// copy Fonts and other assets
gulp.task('copy', require('./gulp-tasks/copy').dist(gulp, $, paths));
gulp.task('build:copy', require('./gulp-tasks/copy').build(gulp, $, paths));

// Browser-Sync Tasks
gulp.task('browser-sync', require('./gulp-tasks/browserSync').dist(gulp, $, paths));
gulp.task('build:serve', require('./gulp-tasks/browserSync').dist(gulp, $, paths));

// Build Tasks

// clean out all files and folders from build folder
gulp.task('build:clean', function(cb) {
    del([
        'build/**'
    ], cb);
});
gulp.task('build', function(cb) {
    runSequence('build:scss', 'build:css', 'build:js', 'build:img', 'build:pug', 'build:copy', cb);
});

// Watch Tasks

gulp.task('watch', function() {
    gulp.watch(paths.scss.app, ['scss']);
    gulp.watch(paths.css.app, ['css']);
    gulp.watch(paths.js.app, ['js']);
    gulp.watch(paths.html.app, ['pug']);
    gulp.watch(paths.img.app, ['img']);
    gulp.watch('app/includes/**/*', ['pug']);
    gulp.watch(paths.copy.font.app, ['copy']);
    gulp.watch(paths.copy.js.app, ['copy']);
});


gulp.task('default', ['js', 'scss', 'css', 'pug', 'img', 'copy', 'browser-sync', 'watch']);