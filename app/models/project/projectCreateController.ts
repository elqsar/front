module demoApp {
    'use strict';

    export interface ProjectCreateScope extends ng.IScope {
    }

    export class ProjectCreateController {

        public static $inject = ['$scope'];

        constructor(private $scope: ProjectCreateScope) {
            
        }

    }

}