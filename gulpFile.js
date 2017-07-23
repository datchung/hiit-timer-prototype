var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

// gulp dist

gulp.task('dist-clean', function () {
  return del([
    'dist/**/*.*'
  ]);
});

gulp.task('dist-scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())                         // check syntax, etc
        .pipe(jshint.reporter('default'))       // report jshint errors
        .pipe(concat('app.js'))                 // concat all files
        .pipe(uglify())                         // minify
        .pipe(gulp.dest('dist'));            // copy to destination
});

gulp.task('dist-html', function() {
    return gulp.src('**/*.htm')
        .pipe(gulp.dest('dist'));
});

gulp.task('dist-media', function() {
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('dist-vendor-scripts', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist-vendor-styles', function() {
    return gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/normalize.css/normalize.css'
        ])
        .pipe(cleanCSS())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', function (callback) {
    runSequence(
        'dist-clean',
        'dist-scripts',
        'dist-html',
        'dist-media',
        'dist-vendor-scripts',
        'dist-vendor-styles',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('dist finished succesfully');
            }
            callback(error);
    });
});


// gulp dev

gulp.task('dev-clean', function () {
  return del([
    'js/app.js',
    'vendor/vendor.js'
  ]);
});

gulp.task('dev-scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())                         // check syntax, etc
        .pipe(jshint.reporter('default'))       // report jshint errors
        .pipe(concat('app.js'))                 // concat all files
        .pipe(gulp.dest(''));                   // copy to destination
});

gulp.task('dev-vendor-scripts', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/bootstrap.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(''));
});

gulp.task('dev-vendor-styles', function() {
    return gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/normalize.css/normalize.css'
        ])
        .pipe(cleanCSS())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(''));
});

gulp.task('dev', function (callback) {
    runSequence(
        'dev-scripts',
        'dev-vendor-scripts',
        'dev-vendor-styles',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('dev finished succesfully');
            }
            callback(error);
    });
});