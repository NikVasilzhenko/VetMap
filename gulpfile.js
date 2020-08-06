'use strict'; //строгий режим

/*зависимости*/
//подключаем зависимости
var gulp = require('gulp'), // сам gulp
    browserSync = require('browser-sync').create(), //синхронизация с браузером
    notify = require('gulp-notify'), //вывод ошибок в консоль терминала
    plumber = require('gulp-plumber'), //поиск ошибок
    sass = require('gulp-sass'), // компилятор sass
    sourcemaps = require('gulp-sourcemaps'), // карта минифицированного файла
    autoprefixer = require('gulp-autoprefixer'), // автопрефиксер
    csso = require('gulp-csso'), //очистка и минификация
    concat = require('gulp-concat'), //объединение и минификация js
    replace = require('gulp-replace'),
    pug = require('gulp-pug');

/*таски*/

//таск serve
gulp.task('serve', function(){
  browserSync.init({
    server: {
	 baseDir: './build'
    }
  });
});

//таск pug
gulp.task('pug', function(){
  return gulp.src('src/pug/pages/*.pug')
    .pipe(plumber({
      errorHandler: notify.onError(function(err){
        return {
          title: 'Pug',
          message: err.message
        }
      })
    })) //поиск ошибок и вывод их в консоль терминала
    .pipe(pug({
      pretty: true //опция делает скомпилированый код с отступами а не в одну строку
    }))
    .pipe(gulp.dest('build')) //директория куда складывать скомпилированые файлы
    .on('end', browserSync.reload);
});

//таск sass
gulp.task('sass', function() {
  return gulp.src('src/static/scss/style.scss')
    .pipe(sourcemaps.init())// инициируем сорсмап
    .pipe(plumber({
      errorHandler: notify.onError(function(err){
        return {
          title: 'Styles',
          message: err.message
        }
      })
    }))//поиск ошибок и вывод их в консоль терминала
    .pipe(sass())// компилятор sass
    .pipe(autoprefixer({
      cascade: false
    }))// автопрефиксер
    .pipe(csso())//очистка и минификация
    .pipe(sourcemaps.write())// записываем сорсмап
    .pipe(gulp.dest('build/css/')) //директория куда складывать скомпилированые файлы
    .pipe(browserSync.reload({
      stream: true
    }));
});

//таск vendors
gulp.task('vendors', function(){
  return gulp.src([
    'node_modules/intl-tel-input/build/js/intlTelInput.js',
    'node_modules/intl-tel-input/build/js/utils.js',
  ])
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//таск scripts
gulp.task('scripts', function(){
  return gulp.src([		
    'src/static/js/init.js',
    'src/static/js/main.js'
  ])
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('build/js/')) //директория куда складывать скомпилированые файлы
    .pipe(browserSync.reload({
      stream: true
    }));
});

//таск pic, favicon, og, svg
gulp.task('pic', function() {
  return gulp.src('src/static/img/**/*')      
    .pipe(gulp.dest('build/img/'))
    .pipe(browserSync.reload({
      stream: true
  }));
});

//таск fonts
gulp.task('fonts', function() {
  return gulp.src('src/static/fonts/*')      
    .pipe(gulp.dest('build/fonts/'))
    .pipe(browserSync.reload({
      stream: true
  }));
});

//таск watch
gulp.task('watch', function() {
  gulp.watch('src/pug/**/*', gulp.series('pug'));
  gulp.watch('src/static/scss/**/*', gulp.series('sass'));
  gulp.watch('src/static/js/*.js', gulp.series('scripts'));
  gulp.watch('src/static/img/**/*', gulp.series('pic'));
  gulp.watch('src/static/fonts/*', gulp.series('fonts'));
});

//дефолтный таск, запускаемый по команде gulp
gulp.task('default', gulp.series(
  gulp.parallel(
    'pug', 
    'sass', 
    'vendors', 
    'scripts', 
    'fonts',
    'pic'), //параллельный запуск тасков
  gulp.parallel('watch', 'serve') //параллельный запуск тасков после выполнения предыдущих
));