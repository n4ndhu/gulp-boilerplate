module.exports = {
    dist: function(gulp, $, paths) {
        return function() {
            $.browserSync({
                server: {
                    baseDir: "./dist/"
                },
                options: {
                    reloadDelay: 250
                },
            });
        }
    },
    build: function(gulp, $, paths) {
        return function() {
            browserSync({
                server: {
                    baseDir: "./build/"
                }
            });
        }
    }
};