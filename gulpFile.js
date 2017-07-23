var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// gulp dist

gulp.task('dist-clean', function () {
  return del([
    'dist/**/*.*'
  ]);
});

gulp.task('dist-scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())                         // check syntax, etc
        .pipe(concat('app.js'))                 // concat all files
        .pipe(uglify())                         // minify
        //.pipe(rename({ extname: '.min.js' }))   // rename
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

gulp.task('dist-vendor', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', function (callback) {
    runSequence(
        'dist-clean',
        'dist-scripts',
        'dist-html',
        'dist-media',
        'dist-vendor',
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
        .pipe(concat('app.js'))                 // concat all files
        .pipe(gulp.dest(''));                 // copy to destination
});

gulp.task('dev-vendor', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.min.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(''));
});

gulp.task('dev', function (callback) {
    runSequence(
        'dev-scripts',
        'dev-vendor',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('dev finished succesfully');
            }
            callback(error);
    });
});