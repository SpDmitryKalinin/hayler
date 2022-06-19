//Импортируем галп
import gulp from 'gulp';

//Импортируем пути
import { path } from './gulp/config/path.js';

import { plugins } from './gulp/config/plugins.js';

//Передаем значения в глобальную переменную

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//Импортируем задачу копирования файлов в дист

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontStyle} from './gulp/tasks/fonts.js';

//Делаем функцию наблюдатель

function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, scripts)
    gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const MainTasks = gulp.parallel(copy, html, scss, scripts, images);

const dev = gulp.series(reset, MainTasks, gulp.parallel(server, watcher));


//Иницилизируем задачу копирования файлов в дист

gulp.task('default', dev);