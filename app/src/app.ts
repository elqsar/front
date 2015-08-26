/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='config/routes.ts' />
/// <reference path='config/formlyConfig.ts' />
/// <reference path='technology/technologyController.ts' />
/// <reference path='home/homeControllers.ts' />
/// <reference path='project/projectsController.ts' />
/// <reference path='project/projectController.ts' />
/// <reference path='menu/menuController.ts' />
/// <reference path='hacker/hackerController.ts' />
/// <reference path='project/projectCreateController.ts' />
/// <reference path='mainnav/mainNavService.ts' />
/// <reference path='subnav/subnavDirective.ts' />
/// <reference path='mainnav/mainNavTitleDirective.ts' />
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
                'ngSanitize',
                'formly'])

        .config(demoApp.config.routesConfig)
        .config((RestangularProvider : restangular.IProvider) => {
            RestangularProvider.setBaseUrl('http://localhost:3000/api');
        })
        
        .run(demoApp.formlyConfig.demoAppFormlyConfig)
        
        .controller('TechnologyController', TechnologyController)
        .controller('HomeController', HomeController)
        .controller('ProjectsController', ProjectsController)
        .controller('ProjectController', ProjectController)
        .controller('AddProjectDialogController', AddProjectDialogController)
        .controller('AddTechnologyDialogController', AddTechnologyDialogController)
        .controller('MenuController', MenuController)
        .controller('HackerController', HackerController)
        .controller('ProjectCreateController', ProjectCreateController)

        .service('TechnologyService', TechnologyService)
        .service('MainNavService', MainNavService)
        .service('ProjectService', ProjectService)
        .service('HackerService', HackerService)
        
        .directive('title', MainNavTitleDirective.factory())
        .directive('subnav', SubnavDirective.factory());
}