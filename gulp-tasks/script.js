module.exports = {
    dist: function(gulp, $, paths) {
        return function() {
            gulp.src(paths.js.app)
                .pipe($.sourcemaps.init())
                .pipe($.concat('temp.js'))
                .pipe($.strip())
                .on('error', $.errorlog)
                .pipe($.rename('script.js'))
                .pipe($.sourcemaps.write(paths.js.map))
                .pipe(gulp.dest(paths.js.dist))
                .pipe($.browserSync.reload({ stream: true }));
        }
    },
    build: function(gulp, $, paths) {
        return function() {
            gulp.src(paths.js.app)
                .pipe($.concat('temp.js'))
                // .pipe($.uglify())
                .pipe($.strip())
                .on('error', $.errorlog)
                .pipe($.rename('script.js'))
                .pipe(gulp.dest(paths.js.build));
        }
    }
};