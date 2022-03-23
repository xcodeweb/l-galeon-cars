export const copy = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts))
}

export const copyv = () => {
  return app.gulp.src(app.path.src.vid)
    .pipe(app.gulp.dest(app.path.build.vid))
}