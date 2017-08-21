var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

//компилим sass
gulp.task('sсss', function(){
	return gulp.src('app/sсss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 2 versions', '> 1%'], {cascade: true}))
	.pipe(gulp.dest('app/css'));
	//.pipe(browserSync.reload({stream: true}))
});

//сжимаем все библиотеки js
gulp.task('scripts', function(){
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/libs/jquery.easing/jquery.easing.js',
			'app/libs/slick/slick.min.js'
			// 'app/libs/air-datepicker/src/js/datepicker.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

//сжимаем все библиотеки css. библиотеки импортируются в файл app/sass/libs.css
gulp.task('css-libs', ['sсss'], function(){
	return gulp.src('app/scss/libs.scss')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

//перезагрузка браузеров
gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

//удаляем папку билда(dist)
gulp.task('clean', function(){
	return del.sync('dist');
});

//чистим кеш картинок
gulp.task('clear', function(){
	return cache.clearAll();
});

//обрабатываем картинки
gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlagins: [{removeVeiwBox: false}],
		use: [pngquant()]
		})))
	.pipe(gulp.dest('dist/img'));
});

//запускаем таски для разработки и радуемся
gulp.task('dev', ['browser-sync', 'css-libs', 'scripts'], function(){
	gulp.watch('app/sсss/*.scss', ['sсss']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/media/**/*.scss', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

//билдим что получилось после разработки
gulp.task('build', ['clean', 'img', 'sсss', 'scripts'], function(){
	
	var buildCss = gulp.src([
		'app/css/main.css',
		'app/css/libs.min.css',
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
	
});