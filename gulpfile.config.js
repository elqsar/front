'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './';
        this.sourceApp = './app/';
        this.assets = this.sourceApp + 'assets/**/*';
        this.public = '_public';
        this.test = './test';

        this.tsOutputPath = this.public + '/js';
        this.tsTestsOutputPath = this.public + '/test';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/models/**/*.ts';
        this.allTypeScriptSpecs = this.test + '/**/*.spec.ts';
        this.publicJsComponentsDir = this.public + '/' + 'js_components';
        this.allLessFiles = this.sourceApp + '/**/*.less';
        this.allSassFiles = this.sourceApp + '/**/*.scss';
        this.compiledCssDir = this.public + '/css';

        this.libraryTypeScriptDefinitions = this.sourceApp +'/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'typescriptApp.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;