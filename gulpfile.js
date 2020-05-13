const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const $ = require('gulp-load-plugins')();

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
