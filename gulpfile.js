const { watch, series, src, dest } = require("gulp");
const sass = require("gulp-scss")
const tar = require("tar")

function buildCss () {
    return src('site/assets/sass/main.scss')
        .pipe(sass())
        .pipe(dest('site/dist/css'))
}

async function packRelease() {
    tar.c(
        {
            gzip: true,
            cwd: 'site',
            file: 'wcd.tar.gz'
        },
        ['index.html', 'dist']
    )
}

async function build() {
    buildCss()
}

function defaultWatch() {
    build()
    watch('site/assets/sass/main.scss', buildCss)
}

exports.build = build
exports.release = series(build, packRelease)
exports.default = defaultWatch
