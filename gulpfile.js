'use strict';

var gulp = require('gulp-help')(require('gulp')),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    bower = require('gulp-bower'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    //batch = require('gulp-batch'),
    gulpFilter = require('gulp-filter'),
    karma = require('gulp-karma'),
    Config = require('./gulpfile.config');

var config = new Config();

var $ = require("gulp-load-plugins")({
    pattern: [
        'gulp-*',
        'main-bower-files'
    ]
});

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
gulp.task('gen-ts-refs', function () {
    var target = gulp.src(config.appTypeScriptReferences);
    var sources = gulp.src([config.allTypeScript], {read: false});
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function (filepath) {
            return '/// <reference path="../..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.libraryTypeScriptDefinitions));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', 'Lint all custom TypeScript files.', function () {
    return gulp.src(config.allTypeScript)
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', 'Compile TypeScript and include references to library and app .d.ts files.', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions, //reference to library .d.ts files
                         config.appTypeScriptReferences];     //reference to app.d.ts files

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true,
                           removeComments: true,
                           out : 'app.js'
                       }));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', 'Remove all generated JavaScript files from TypeScript compilation.', function (cb) {
  var typeScriptGenFiles = [config.tsOutputPath,            // path to generated JS files
                            config.sourceApp +'**/*.js',    // path to all JS files auto gen'd by editor
                            config.sourceApp +'**/*.js.map' // path to all sourcemap files auto gen'd by editor
                           ];
  // delete the files
  del(typeScriptGenFiles, cb);
});

/**
 * Copy stuff from the assets folder.
 */
gulp.task('assets', 'Copy stuff from the assets folder', function() {
    return gulp.src(config.assets)
        .pipe(gulp.dest(config.public));
});

gulp.task('bower', 'Include bower stuff', function() {
    bower();

    var jsFilter = gulpFilter('*.js');
    return gulp.src($.mainBowerFiles())
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.publicJsComponentsDir));
});

gulp.task('bower-css', 'Included CSS from bower components', function () {
    var cssFilter = gulpFilter('*.css');
    return gulp.src($.mainBowerFiles())
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.compiledCssDir));
});

gulp.task('sass', 'Sass -> css', function () {
    return gulp.src(config.allSassFiles)
      .pipe(sass({
        includePaths: ['bower_components/foundation/scss']
      }))
      .pipe(concat('style.css'))
      .pipe(gulp.dest(config.compiledCssDir));
} );


gulp.task('less', 'Less -> css', function () {
    return gulp.src(config.allLessFiles)
        .pipe(less())
        .pipe(minifyCss())
        .pipe(concat('styless.css'))
        .pipe(gulp.dest(config.compiledCssDir));
});

gulp.task('watch', 'Watch for changes and build it all.' , ['build'], function() {
    gulp.watch(config.allTypeScript, ['ts-lint', 'compile-ts', 'gen-ts-refs']);
    gulp.watch(config.allLessFiles, ['less']);
    gulp.watch(config.allSassFiles, ['sass']);
    gulp.watch(config.assets, ['assets']);
    gulp.watch('./bower.json', ['bower']);

});

gulp.task('build', 'Build it once', ['bower', 'bower-css', 'sass' , 'less', 'compile-ts', 'assets']);

gulp.task('serve', 'Serve the generated stuff.', ['watch'], function() {
//    gulp.start();
    gulp.src(config.public)
        .pipe($.webserver({
            port: 3333,
            livereload: true,
            fallback: 'index.html'
        }));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts-test', 'Compile TypeScript tests', ['compile-ts'], function () {
    var sourceTsFiles = [config.allTypeScriptSpecs,
                         config.libraryTypeScriptDefinitions];

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(tsc({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true,
                           removeComments: true,
                           out : 'tests.js'
                       }));

        tsResult.dts.pipe(gulp.dest(config.tsTestsOutputPath));
        return tsResult.js
                        .pipe(gulp.dest(config.tsTestsOutputPath));
});

gulp.task('test', 'Run all tests', ['compile-ts-test'], function(done) {
    // Be sure to return the stream
    return gulp.src('./idontexist')
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('default', 'When ran as "gulp" without exta task, it will run the server.', ['serve']);