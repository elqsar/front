/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />


module demoApp {
    'use strict';

    angular
        .module('hakkaStack', ['ui.router'])
        .config(demoApp.config.routesConfig);
}