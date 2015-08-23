/// <reference path='projectService.ts' />


module demoApp {
    'use strict';

    export interface ProjectsScope extends ng.IScope {
        button: Object;
        tabs: Array<Object>;
    }

    export class ProjectsController {

        public static $inject = ['$scope', 'ProjectService'];

        constructor(private $scope: ProjectsScope, private projectService: ProjectService) {            
            $scope.tabs = [{ name: 'All Projects' }, { name: 'My Projects' }];
            $scope.button = { title: 'New Project' };
        }

    }

}