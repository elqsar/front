module demoApp {
    'use strict';

	export interface MainNavScope extends ng.IScope {
        title: string;
    }

    export class MainNavController {
        public static $inject = ['$scope', '$location', 'MainNavService'];
   
		constructor(private $scope: any, private $location: ng.ILocationService, private MainNavService) {
            
        } 
	}
}