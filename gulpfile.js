var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean_css = require('gulp-clean-css');

gulp.task('index_js', function () {
	return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',

    'node_modules/underscore/underscore-min.js',
		'node_modules/socket.io-client/dist/socket.io.js',

		'client/socket/client_socket.js',

    'client/components/bundle/index_components_bundle.js'
  ])
	.pipe(concat('js.min.js'))
  .pipe(uglify({ mangle: false }))
	.pipe(gulp.dest('client/dist/index/js'));
});

gulp.task('index_css', function () {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		
		'client/fonts/fonts.css'
  ])
	.pipe(concat('css.min.css'))
  .pipe(clean_css())
	.pipe(gulp.dest('client/dist/index/css'));
});

gulp.task('watch', function () {
	gulp.watch('client/components/bundle/index_components_bundle.js', ['index_js']);
});

gulp.task('default', [
	'index_js',
	'index_css',
	'watch'
]);
