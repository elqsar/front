/// <reference path='projectService.ts' />


module demoApp {
    'use strict';

    export interface ProjectsScope extends ng.IScope {
        button: Object;
        tabs: Array<Object>;
        projects: Array<Project>;
        page: Object;
    }

    export class ProjectsController {

        public static $inject = ['$scope', 'ProjectService'];

        constructor(private $scope: ProjectsScope, private projectService: ProjectService) {            
            $scope.tabs = [{ name: 'All Projects' }, { name: 'My Projects' }];
            $scope.button = { title: 'New Project' };
            $scope.page = { name: 'createProject' };
            $scope.projects = [
                { id:1, name: 'Demo', description: 'Just simple project', icon: '' },
                { id:2, name: 'Demo', description: 'Just simple project', icon: '' },
                { id:3, name: 'Demo', description: 'Just simple project', icon: '' },
                { id:4, name: 'Demo', description: 'Just simple project', icon: '' },
                { id:5, name: 'Demo', description: 'Just simple project', icon: '' }
            ]
        }

    }

}