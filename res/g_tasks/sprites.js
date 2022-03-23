import gulpSvg from "gulp-svg-sprite";

export const svgSprite = () => {
  return app.gulp
    .src(app.path.src.svgs)
    .pipe(
      gulpSvg({
        mode: {
          stack: {
            sprite: `../sprite/sprite`,
            example: app.isBuild ? false : true
          }
        }
      })
    )
    .pipe(app.gulp.dest(app.path.build.imgs));
};
