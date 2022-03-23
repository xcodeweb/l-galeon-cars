import imagemin from "gulp-imagemin";
import newer from "gulp-newer";

export const images = () => {
  return app.gulp
    .src(app.path.src.imgs)
    .pipe(newer(app.path.build.imgs))
    .pipe(imagemin())
    .pipe(app.gulp.dest(app.path.build.imgs))
    .pipe(app.plugins.browsersync.stream());
};
