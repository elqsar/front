module demoApp {
    'use strict';
	
	export interface MenuScope extends ng.IScope {
        active: Function;
    }
	
	export class MenuController {
		
		public static $inject = ['$location'];
		public active: Function;
		
		constructor(public $location: ng.ILocationService) {
			this.active = this.getActive;
		}
		
		private getActive(path: string) {
			return this.$location.path() === path ? 'active' : '';
		}
	}
}