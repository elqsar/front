/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />
/// <reference path='technology/technologyController.ts' />
/// <reference path='home/homeControllers.ts' />
/// <reference path='home/homeControllers.ts' />



module demoApp {
    'use strict';

    angular
        .module('hakkaStack', ['ui.router', 'restangular', 'mm.foundation'])
        .config(demoApp.config.routesConfig)
        .config((RestangularProvider : restangular.IProvider) => {
            RestangularProvider.setBaseUrl('http://private-65917-hakkastack.apiary-mock.com');
        })
        .controller('TechnologyController', TechnologyController)
        .controller('HomeController', HomeController)
        .controller('AddProjectDialogController', AddProjectDialogController)
        .service('TechnologyService', TechnologyService)
        .service('ProjectService', ProjectService)
        .service('PersonService', PersonService);
}