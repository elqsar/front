/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />
/// <reference path='technology/technologyController.ts' />
/// <reference path='home/homeControllers.ts' />
/// <reference path='home/homeControllers.ts' />



module demoApp {
    'use strict';

    angular
        .module('hakkaStack', ['ui.router', 'restangular', 'mm.foundation', 'ui.select', 'ngSanitize'])
        .config(demoApp.config.routesConfig)
        .config((RestangularProvider : restangular.IProvider) => {
            RestangularProvider.setBaseUrl('http://private-65917-hakkastack.apiary-mock.com');
        })
        .controller('TechnologyController', TechnologyController)
        .controller('HomeController', HomeController)
        .controller('AddProjectDialogController', AddProjectDialogController)
        .controller('AddTechnologyDialogController', AddTechnologyDialogController)
        .service('TechnologyService', TechnologyService)
        .service('ProjectService', ProjectService)
        .service('PersonService', PersonService);
}