/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />

module demoApp.config {

    export function routesConfig($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'template/home.html'
        }).state('test', {
            url: '/test',
            templateUrl: 'template/demo.html',
            controller: 'TechnologyController'
        });

    }

}