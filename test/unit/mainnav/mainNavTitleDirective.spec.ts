/// <reference path="../spec.d.ts"/>

describe('MainNavDirective test', () => {
	var $compile: ng.ICompileService;
	var $rootScope: ng.IRootScopeService;
	var $location: ng.ILocationService;
	var mainNavService;
	
	beforeEach(module('hakkaStack'));
	
	beforeEach(() => {
		inject(function(_$compile_, _$rootScope_, _$location_, MainNavService) {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			$location = _$location_;
			mainNavService = MainNavService;
		});
	});
	
	it('should create proper menu', () => {
	});
});