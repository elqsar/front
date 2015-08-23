/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />

module demoApp.config {

    export function routesConfig($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('projects', {
            url: '/',
            templateUrl: 'template/projects.html',
            controller: 'ProjectsController'
        }).state('project', {
            url: '/project/:projectId',
            templateUrl: 'template/project.html',
            controller: 'ProjectController'
        }).state('technologies', {
            url: '/technologies',
            templateUrl: 'template/technologies.html',
            controller: 'TechnologyController'
        }).state('hackers', {
            url: '/hackers',
            templateUrl: 'template/hackers.html',
            controller: 'HackerController'
        });
    }

}