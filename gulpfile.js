const { src, dest } = require("gulp");
const sass = require("gulp-scss")

function buildCss () {
    return src('site/assets/sass/main.scss')
        .pipe(sass())
        .pipe(dest('site/dist/css/main.css'))
}

exports.buildCss = buildCss
exports.default = buildCss
