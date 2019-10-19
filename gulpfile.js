const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp')
const path = require('path')
const connect = require('gulp-connect')
const sass = require('gulp-sass')
const webpack = require('webpack-stream')
const proxy = require('http-proxy-middleware')

//copyHtml
function copyHtml() {
    return src('./src/*.html')
        .pipe(dest('./dev/'))
        .pipe(connect.reload())
}

//copyLibs
function copyLibs() {
    return src('./src/libs/**/*')
        .pipe(dest('./dev/libs'))
}

// copyassets
function copyAssets() {
    return src('./src/assets/**/*')
        .pipe(dest('./dev/assets'))
}

//compire scss
function packSass() {
    return src('./src/styles/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dev/styles'))
        .pipe(connect.reload())
}

//JS 模块化 MVC
function packJs() {
    return src('./src/scripts/app.js')
        .pipe(webpack({
            mode: 'development',
            entry: {
                app: './src/scripts/app.js',
                classify: './src/scripts/classify.js',
                detail: './src/scripts/detail.js',
                search: './src/scripts/search.js',
                searchContent: './src/scripts/searchContent.js',
                login: './src/scripts/login.js',
                history: './src/scripts/history.js'
            },
            output: {
                path: path.resolve(__dirname, './dev'),
                filename: '[name].js'
            },
            module: {
                rules: [{
                    test: /\.art$/,
                    loader: "art-template-loader"
                }]
            }
        }))
        .pipe(dest('./dev/scripts'))
        .pipe(connect.reload())
}

//run server
function gulpServer() {
    return connect.server({
        name: 'Dist App',
        root: './dev',
        port: 8000,
        host: '10.9.49.208',
        livereload: true,
        middleware: () => {
            return [
                proxy(
                    '/api', {
                        target: 'https://mhd.zhuishushenqi.com/',
                        changeOrigin: true,
                        pathRewrite: {
                            '^/api': ''
                        }
                    }
                ),
                proxy(
                    '/app', {
                        target: 'http://m.buka.cn',
                        changeOrigin: true,
                        pathRewrite: {
                            '^/app': ''
                        }
                    }
                )
            ]
        }
    })
}
//watch
function watchFiles() {
    watch('./src/*.html', series(copyHtml))
    watch('./src/libs/*', series(copyLibs))
    watch('./src/assets/*', series(copyAssets))
    watch('./src/**/*.scss', series(packSass))
    watch('./src/**/*', series(packJs))
}

exports.default = series(parallel(copyHtml, copyLibs, copyAssets, packSass, packJs), parallel(gulpServer, watchFiles))