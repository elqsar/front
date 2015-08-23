/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />
/// <reference path='technology/technologyController.ts' />
/// <reference path='home/homeControllers.ts' />
/// <reference path='project/projectsController.ts' />
/// <reference path='project/projectController.ts' />
/// <reference path='mainnav/mainNavController.ts' />
/// <reference path='menu/menuController.ts' />
/// <reference path='hacker/hackerController.ts' />
/// <reference path='mainnav/mainNavService.ts' />
/// <reference path='subnav/subnavDirective.ts' />
/// <reference path='hacker/hackerService.ts' />


module demoApp {
    'use strict';

    angular
        .module('hakkaStack',
            [
                'ui.router',
                'restangular',
                'mm.foundation',
                'ui.select',
                'ngSanitize'])

        .config(demoApp.config.routesConfig)
        .config((RestangularProvider : restangular.IProvider) => {
            RestangularProvider.setBaseUrl('http://localhost:3000/api');
        })

        .controller('TechnologyController', TechnologyController)
        .controller('HomeController', HomeController)
        .controller('ProjectsController', ProjectsController)
        .controller('ProjectController', ProjectController)
        .controller('AddProjectDialogController', AddProjectDialogController)
        .controller('AddTechnologyDialogController', AddTechnologyDialogController)
        .controller('MainNavController', MainNavController)
        .controller('MenuController', MenuController)
        .controller('HackerController', HackerController)

        .service('TechnologyService', TechnologyService)
        .service('MainNavService', MainNavService)
        .service('ProjectService', ProjectService)
        .service('HackerService', HackerService)
        
        .directive('subnav', SubnavDirective.factory());
}