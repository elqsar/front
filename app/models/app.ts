/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />
/// <reference path='controller.ts' />


module demoApp {
    'use strict';

    angular
        .module('hakkaStack', ['ui.router', 'restangular'])
        .config(demoApp.config.routesConfig)
        .controller('DemoController', DemoController)
        .service('TechsService', TechsService);
}