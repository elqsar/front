/// <reference path='technologyService.ts' />


module demoApp {
    'use strict';

    export interface TechnologyScope extends ng.IScope {
        technologies: Array<any>;
        button: Object;
        tabs: Array<Object>;
    }

    export class TechnologyController {

        public static $inject = ['$scope', 'TechnologyService'];

        constructor(private $scope: TechnologyScope, private techsService: TechnologyService) {
            $scope.button = { title: 'New Technology' };
            $scope.tabs = [{ name: 'Technologies' }];
        }
    }

}