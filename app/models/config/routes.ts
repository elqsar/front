/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />

module demoApp.config {

    export function routesConfig($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'template/home.html'
        }).state('projects', {
            url: '/projects',
            templateUrl: 'template/projects.html',
            controller: 'ProjectsController'
        }).state('project', {
            url: '/project/:projectId',
            templateUrl: 'template/project.html',
            controller: 'ProjectController'
        });

    }

}