/// <reference path='../technology/technologyService.ts' />
/// <reference path='../project/projectService.ts' />


module demoApp {
    'use strict';

    export class AddProjectDialogController {
        public static $inject = ['$scope', '$modalInstance', 'TechnologyService', 'ProjectService'];

        constructor(private $scope:any,
                    private $modalInstance:any,
                    private technologyService:TechnologyService,
                    private projectService:ProjectService) {

            $scope.technologies = [];
            $scope.project = {};

            technologyService.getAllTechs().then((techs) => {
                $scope.technologies = techs;
            });

            this.$scope.save = () => {
                projectService
                    .createProject($scope.project)
                    .then(() => $modalInstance.close());
            };

            this.$scope.cancel = () =>  $modalInstance.dismiss('cancel');
        }

    }

    export class AddTechnologyDialogController {
        public static $inject = ['$scope', '$modalInstance', 'TechnologyService'];

        constructor(private $scope:any,
                    private $modalInstance:any,
                    private technologyService:TechnologyService) {

            $scope.technology = {};

            this.$scope.save = () => {
             technologyService.createTechnology($scope.technology)
             .then(() => $modalInstance.close());
             };

            this.$scope.cancel = () =>  $modalInstance.dismiss('cancel');
        }

    }

    export interface HomeScope extends ng.IScope {
        technologies: Array<any>;
        projects: Array<any>;

        addProject(): any;
        addTechnology(): any;
    }

    export class HomeController {

        public static $inject = ['$scope', 'TechnologyService', 'ProjectService', '$modal'];

        constructor(private $scope:HomeScope,
                    private techsService:TechnologyService,
                    private projectService:ProjectService,
                    private $modal:any) {

            function loadTechnologies() {
                techsService.getAllTechs().then((techs:Array<Technology>) => {
                    $scope.technologies = techs;
                });
            }

            function loadProjects() {
                projectService.getAllProjects().then((projects:Array<Project>) => {
                    $scope.projects = projects;
                });
            }


            $scope.addProject = () => {
                $modal.open({
                    templateUrl: 'template/dialog/add-project.html',
                    windowClass: 'new-project',
                    controller: 'AddProjectDialogController'
                }).result.then(loadProjects, loadProjects);
            };

            $scope.addTechnology = () => {
                $modal.open({
                    templateUrl: 'template/dialog/add-technology.html',
                    windowClass: 'new-technology',
                    controller: 'AddTechnologyDialogController'
                }).result.then(loadTechnologies, loadTechnologies);
            };

            loadTechnologies();
            loadProjects();

        }

    }

}