const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const $ = require('gulp-load-plugins')();
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

var inDirPath = process.env.CONTEXT ? '/opt/build/repo/_img' : '_img';
var outDirPath = process.env.CONTEXT ? '/opt/build/repo/assets/img' : 'assets/img';

// Community Images
gulp.task('img', function() {
  return gulp.src(`images/speakers/*.png`)
    .pipe($.responsive({
      '*': [{
        width: 400,
        rename: {
          extname: '.jpg',
        }
      }],
    },
    {
      quality: 85,
      progressive: true,
      withMetadata: false,
      errorOnEnlargement: false,
    }))
    .pipe(imagemin())
    .pipe(gulp.dest(`images/speakers/optimised`));
});


// header images
gulp.task('header-img', function() {
    return gulp.src(`images/backgrounds/*.jpg`)
      .pipe($.responsive({
        '*': [{
          width: 540,
          rename: {
            suffix: '_xs' ,
            extname: '.jpeg',
          },
        },{
          width: 768,
          rename: {
            suffix: '_sm',
            extname: '.jpeg',
          }
        }, {
          width: 992,
          rename: {
            suffix: '_md',
            extname: '.jpeg',
          }
        },{
          width: 1299,
          rename: {
            suffix: '_lg',
            extname: '.jpeg',
          }
        },{
          width: 1920,
          rename: {
            suffix: '_xl',
            extname: '.jpeg',
          }
        }],
      },
      {
        quality: 85,
        progressive: true,
        withMetadata: false,
        errorOnEnlargement: false,
      }))
      .pipe(imagemin())
      .pipe(gulp.dest(`images/backgrounds/`));
  });




// SASS
gulp.task('sass', function() {
  let autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 10', 'IE 11'];

  return gulp.src('dist/base5f4b.css')
    .pipe(prefix({
      browsers: autoprefixBrowsers,
      flexbox: true
    }))
    .pipe(cleanCSS({
     level: 2
    }))
    .pipe(rename({ basename: 'compiled' }))
    .pipe(gulp.dest(''));
});
