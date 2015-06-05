module demoApp {
    'use strict';

    export class ProjectService {

        public static $inject = [
            'Restangular',
            '$q'
        ];

        constructor(private Restangular: restangular.IService,
                    private $q: ng.IQService) {
        }

        getAllProjects() {
            return this.Restangular.all('projects').getList();
        }

        createProject(project: Project) {
            return this.Restangular.all('projects').post(project)
                .then((newProject: Project) => { this.setProjectTechnologies(newProject, project.technologies); } );
        }

        updateProject(project: Project) {
            var projectCopy = this.Restangular.copy(project);
            return this.$q.all([this.Restangular.one('projects', project.id).put(projectCopy),
                this.setProjectTechnologies(project, project.technologies)]
            );
        }

        deleteProject(project: Project) {
            return this.Restangular.one('projects', project.id).remove();
        }

        getProjectTechnologies(project: Project) {
            return this.Restangular.one('projects', project.id).all('technologies');
        }

        setProjectTechnologies(project: Project, technologies: Technology[]) {
            return this.Restangular.one('projects', project.id).all('technologies').post(technologies);
        }

        getProjectPersons(project: Project) {
            return this.Restangular.one('projects', project.id).all('persons');
        }

        setProjectPersons(project: Project, persons: Person[]) {
            return this.Restangular.one('projects', project.id).all('persons').post(persons);
        }
    }

}