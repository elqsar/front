/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />
/// <reference path='controller.ts' />


module demoApp {
    'use strict';

    angular
        .module('hakkaStack', ['ui.router', 'restangular'])
        .config(demoApp.config.routesConfig)
        .config((RestangularProvider : restangular.IProvider) => {
            RestangularProvider.setBaseUrl('http://hakkastack.apiblueprint.org');
        })
        .controller('DemoController', DemoController)
        .service('TechsService', TechsService);
}