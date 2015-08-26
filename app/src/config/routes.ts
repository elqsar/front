/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />

module demoApp.config {

    export function routesConfig($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('projects', {
            url: '/',
            templateUrl: 'template/project/projects.html',
            controller: 'ProjectsController'
        }).state('project', {
            url: '/project/:projectId',
            templateUrl: 'template/project/project.html',
            controller: 'ProjectController'
        }).state('technologies', {
            url: '/technologies',
            templateUrl: 'template/technology/technologies.html',
            controller: 'TechnologyController'
        }).state('hackers', {
            url: '/hackers',
            templateUrl: 'template/hacker/hackers.html',
            controller: 'HackerController'
        }).state('createProject', {
            url: '/projects/create',
            templateUrl: 'template/project/create.html',
            controller: 'ProjectCreateController'
        });
    }

}