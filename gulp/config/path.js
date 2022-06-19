import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); // Путь к корневой папке

const buildFolder = './dist'; // Путь к папку продакшена
const srcFolder = './src';// Путь к папку девелопмента

export const path = {
    build: {
        html: buildFolder +'/',
        css: buildFolder +'/css/',
        js:  buildFolder + '/js/',
        images: buildFolder + '/assets/',
        files: buildFolder +'/files/',
        fonts: buildFolder +'/fonts/',
    },
    src: {
        html: srcFolder + '/*.html',
        scss: srcFolder + '/scss/index.scss',
        images: srcFolder + '/assets/**/*.{jpg,jpeg,png,gif,webp,mp4,svg}',
        js:srcFolder + '/js/index.js',
        files: srcFolder + '/files/**/*.*',
        
    },
    watch: {
        html: srcFolder +'/**/*.html',
        scss: srcFolder + '/scss/**/*.scss',
        images: srcFolder + '/assets/**/*.{jpg,jpeg,png,gif,webp,mp4,svg}',
        js: srcFolder + '/js/**/*.js',
        files: srcFolder +'/files/**/*.*',
 
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''

}

