/// <reference path="../../app/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../app/typings/angularjs/angular-mocks.d.ts"/>

describe('ProjectsController tests', () => {
	
	var projectService: demoApp.ProjectService;
	var scope: demoApp.ProjectsScope;
	
	beforeEach(module('hakkaStack'));
	
	beforeEach(() => {
		inject(function($rootScope: ng.IRootScopeService, _$controller_: ng.IControllerService, ProjectService) {
			scope = $rootScope.$new();
			projectService = ProjectService;
		});
	});
	
	it('should initialize', () => {
		expect(scope).toBeDefined();
		expect(projectService).toBeDefined();
	});
	
	it('scope tests', () => {
		var controller = new demoApp.ProjectsController(scope, projectService);
		
		expect(controller).toBeDefined();
		expect(scope.tabs.length).toBe(2);
		expect(scope.button).toEqual({ title: 'New Project' });
		expect(scope.page).toEqual({ name: 'createProject' });
	});
})