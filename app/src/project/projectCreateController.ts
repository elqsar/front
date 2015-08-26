module demoApp {
    'use strict';

    export interface ProjectCreateScope extends ng.IScope {
        project: Object,
        projectFields: Array<any>;
        create: Function;
    }

    export class ProjectCreateController {

        public static $inject = ['$scope'];

        constructor(private $scope: ProjectCreateScope) {
            $scope.project = {};
            
            $scope.projectFields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name'
                    }
                },
                {
                    key: 'shortDescription',
                    type: 'input',
                    templateOptions: {
                        label: 'short description'
                    }
                },
                {
                    key: 'longDescription',
                    type: 'input',
                    templateOptions: {
                        label: 'long description'
                    }
                }
            ];
            
            $scope.create = () => {
                console.log('Create');
            }
        }

    }

}