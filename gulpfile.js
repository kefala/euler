var paths = {
  js : {

    dev : [
    'src/Core/app.js',
    'src/Core/config.js',
    'src/Core/router.js',
    'src/Core/main.js',
    'src/Components/**/*.js',
    'src/**/Views/*.js',
    'src/**/*.js'
    ],

    vendor : [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/mustache/mustache.min.js',
    'node_modules/underscore/underscore-min.js',
    'node_modules/backbone/backbone-min.js',
    'node_modules/materialize-css/dist/js/materialize.min.js'
    ]
  },

  css: {
    dev: [
    ],
    vendor: [
    'node_modules/materialize-css/dist/css/materialize.min.css',
    ]
  },

  html: {
    directives: [
      'src/Components/**/*.html'
    ],
    views: [
    ]
  },

  'fonts': {
      fonts: ['node_modules/materialize-css/dist/font/roboto/*']
  }

};

//genericos
var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var order = require("gulp-order");
//javascript
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
//sass
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
//html
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
//fonts
//test
var Server = require('karma').Server;

/*------------------------------------------------------------------------------------------------*/

/*  JAVASCRIPT TASK */ 

gulp.task('lint', function() {
  gulp.src(paths.js.dev)
  .pipe(jshint())
  .pipe(jshint.reporter('default'),{ verbose: true })
  .pipe(jshint.reporter('fail'));
});

gulp.task('devScripts', function() {
  return gulp.src(paths.js.dev)
  .pipe(concat('dev.js'))
  //.pipe(uglify())
  .pipe(gulp.dest('dist/'));
});

gulp.task('vendorScripts', function() {
  return gulp.src(paths.js.vendor)
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('concatJs', function() {
  return gulp.src(['dist/vendor.js', 'dist/dev.js'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('cleanConcatJs', function() {
  gulp.src(['dist/vendor.js', 'dist/dev.js'])
  .pipe(clean({force: true}));
});


/*------------------------------------------------------------------------------------------------*/

/*  CSS TASK */ 

gulp.task('vendorCss', function () {
  return gulp.src(paths.css.vendor)
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: true
  }))
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('devCss', function () {
  return gulp.src(paths.css.dev)
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: true
  }))
  .pipe(concat('dev.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/'));
});

gulp.task('concatCss', function() {
  return gulp.src(['dist/vendor.css', 'dist/dev.css'])
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('cleanConcatCss', function() {
  gulp.src(['dist/vendor.css', 'dist/dev.css'])
  .pipe(clean({force: true}));
});

/*------------------------------------------------------------------------------------------------*/

/*  HTML TASK */

gulp.task('moveDirectives', function () {
  return gulp.src(paths.html.directives)
  .pipe(rename(function (path) {  
    path.dirname = "";
    path.basename = "component." + path.basename;
  }))
  .pipe(minifyHTML({ empty: true }))
  .pipe(gulp.dest('dist/miame/'));
});

gulp.task('moveViews', function () {
  return gulp.src(paths.html.views)
  .pipe(rename(function (path) {  
    path.dirname = "";
    path.basename = "view." + path.basename;
  }))
  .pipe(minifyHTML({ empty: true }))
  .pipe(gulp.dest('dist/miame/'));
});

/*------------------------------------------------------------------------------------------------*/

/*  TEST TASK */

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/test.js',
    singleRun: true
  }, done).start();
});

/*------------------------------------------------------------------------------------------------*/

/*  FONTS TASK */

gulp.task('moveFonts', function () {
  return gulp.src(paths.fonts.fonts)
  .pipe(gulp.dest('dist/fonts/roboto/'));
});


/*------------------------------------------------------------------------------------------------*/

/*  MORE TASK */

gulp.task('default', function() {
  runSequence(
    ['lint','vendorScripts','devScripts', 'vendorCss', 'devCss', 'moveDirectives', 'moveViews', 'moveFonts'],
    ['concatJs', 'concatCss'],
    ['cleanConcatJs', 'cleanConcatCss']
    );
});

gulp.task('scripts', function() {
  runSequence(
    ['lint','vendorScripts','devScripts'],
    ['concatJs'],
    ['cleanConcatJs']
    );
});

gulp.task('styles', function() {
  runSequence(
    ['vendorCss', 'devCss'],
    ['concatCss'],
    ['cleanConcatCss']
    );
});

gulp.task('watch', function() {
  var arrayCss = [];
  arrayCss = arrayCss.concat(paths.css.dev);
  arrayCss = arrayCss.concat(paths.css.vendor);

  var arrayHtml = [];
  arrayHtml = arrayHtml.concat(paths.html.directives);
  arrayHtml = arrayHtml.concat(paths.html.views);

  gulp.watch(paths.js.dev, ['scripts']);
  gulp.watch(arrayCss, ['styles']);
  gulp.watch(arrayHtml, ['moveDirectives', 'moveViews']);
});