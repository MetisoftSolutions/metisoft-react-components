const gulp = require('gulp');

exports.default = () => {
  const files = [
    'src/**/*.module.css'
  ];

  return gulp.src(files)
    .pipe(gulp.dest('./dist'));
};
