module demoApp {
    'use strict';

	export interface MainNavScope extends ng.IScope {
        breadcrumbs: Array<String>;
        title: Function;
    }

    export class MainNavController {
        public static $inject = ['$scope', '$location', 'MainNavService'];
   
		constructor(private $scope: any, public $location: ng.ILocationService) {
            $scope.$on('$stateChangeSuccess', (next, current) => {
                $scope.title = this.getTitle();
            });
        }
        
        getTitle() {
            let url = this.$location.url().replace('/', '');
            return url.substring(0, 1).toUpperCase() + url.substring(1) || 'Projects';
        }
	}
}