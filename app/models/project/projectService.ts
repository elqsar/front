module demoApp {
    'use strict';

    export class ProjectService {

        public static $inject = [
            'Restangular'
        ];

        constructor(private Restangular: restangular.IService) {
        }

        getAllProjects() {
            return this.Restangular.all('projects').getList();
        }

        createProject(project: Project) {
            return this.Restangular.all('projects').post(project);
        }

        updateProject(project: Project) {
            var projectCopy = this.Restangular.copy(project);
            return this.Restangular.one('projects', project.id).put(projectCopy);
        }

        deleteProject(project: Project) {
            return this.Restangular.one('projects', project.id).remove();
        }

        getProjectTechnologies(project: Project) {
            return this.Restangular.one('projects', project.id).all('technologies');
        }
    }

}