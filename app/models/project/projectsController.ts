/// <reference path='projectService.ts' />


module demoApp {
    'use strict';

    export interface ProjectsScope extends ng.IScope {
        projects: Array<Project>;
    }

    export class ProjectsController {

        public static $inject = ['$scope', 'ProjectService'];

        constructor(private $scope: ProjectsScope, private projectService: ProjectService) {
            projectService.getAllProjects().then((projects) => {
                $scope.projects = projects;
            });
        }

    }

}