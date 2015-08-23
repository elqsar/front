module demoApp {
	'use strict';
	
	export interface HackerScope extends ng.IScope {
        button: Object;
        tabs: Array<Object>;
    }
	
	export class HackerController {
		
		public static $inject = ['$scope'];
		
		constructor(private $scope: HackerScope) {
			$scope.tabs = [{ name: 'Hackers' }];
			$scope.button = { title: 'New Hacker' };
		}
	}
}