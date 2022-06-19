import imagemin from "gulp-imagemin";


export const images = () => {
    return app.gulp.src(app.path.src.images, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title:"Images",
                message:"Error <%= error.message %>"
            })
        ))
        
        .pipe(app.gulp.dest(app.path.build.images))
}