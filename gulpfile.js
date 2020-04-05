var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel  = require('gulp-babel');
var zip = require('gulp-zip');

var chromeManifest = require('./manifest.json');

gulp.task('styles', function() {
	gulp.src('scss/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('.'))
});

gulp.task('scripts', function() {
	return gulp.src(['js/jquery-3.2.1.min.js', 'js/list.js', 'js/scripts.js', 'js/analytics.js'])
		.pipe(concat('betterbrowse.js'))
		.pipe(uglify())
		.pipe(gulp.dest('.'));
});

gulp.task('zip', function() {
	return gulp.src(['manifest.json', '*.png', 'background.js', 'betterbrowse.js', 'inject.js', 'style.css'])
		.pipe(zip('netflix_better_browse_' + chromeManifest.version + '.zip'))
		.pipe(gulp.dest(''));
});

//Watch task
gulp.task('default',function() {
	gulp.watch('scss/**/*.scss',['styles']);
	gulp.watch('js/**/*.js',['scripts']);
});
