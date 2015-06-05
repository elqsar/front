/// <reference path='../technology/technologyService.ts' />
/// <reference path='../project/projectService.ts' />


module demoApp {
    'use strict';

    export class AddProjectDialogController {
        public static $inject = ['$scope', '$modalInstance', 'TechnologyService', 'ProjectService'];
        constructor(
            private $scope: any,
            private $modalInstance: any,
            private technologyService: TechnologyService,
            private projectService: ProjectService
        ) {

            $scope.technologies = [];
            $scope.project = {};

            technologyService.getAllTechs().then((techs) => {
                $scope.technologies = techs;
            });

            var closeModal = () => {
                $modalInstance.dismiss('cancel');
            };

            this.$scope.save = () => {
                projectService
                    .createProject($scope.project)
                    .then(closeModal);
            };

            this.$scope.cancel = () =>  closeModal();
        }

    }


    export interface HomeScope extends ng.IScope {
        technologies: Array<any>;
        projects: Array<any>;

        addProject(): any;
    }

    export class HomeController {

        public static $inject = ['$scope', 'TechnologyService', 'ProjectService', '$modal'];

        constructor(
            private $scope: HomeScope,
            private techsService: TechnologyService,
            private projectService: ProjectService,
            private $modal: any
        ) {
            techsService.getAllTechs().then((techs) => {
                $scope.technologies = techs;
            });

            projectService.getAllProjects().then((projects) => {
                $scope.projects = projects;
            });


            $scope.addProject = () => {
                $modal.open({
                    templateUrl: 'template/dialog/add-project.html',
                    windowClass: 'new-project',
                    controller : 'AddProjectDialogController'
                });
           };

        }

    }

}