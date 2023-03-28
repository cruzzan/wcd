const { watch, series, src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'))
const tar = require("tar")

function buildCss () {
    return src('site/assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('site/dist/css'))
}

function packRelease() {
    return tar.c(
        {
            gzip: true,
            cwd: 'site',
            follow: true,
            file: 'wcd.tar.gz'
        },
        ['index.html', 'dist', 'LICENCE']
    )
}

function defaultWatch() {
    buildCss()
    watch('site/assets/sass/main.scss', buildCss)
}

exports.build = buildCss
exports.release = series(buildCss, packRelease)
exports.default = defaultWatch
