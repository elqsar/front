/// <reference path='projectService.ts' />


module demoApp {
    'use strict';

    export interface MyScope extends ng.IScope {
        project: Project;
    }

    export class ProjectController {

        public static $inject = ['$scope', 'ProjectService', '$stateParams'];

        constructor(private $scope: MyScope, private projectService: ProjectService, private $stateParams: ng.ui.IStateParamsService) {
            var projectId = $stateParams['projectId'];
            projectService.getProject(projectId).then((project) => {
                $scope.project = project;
            });
        }

    }

}