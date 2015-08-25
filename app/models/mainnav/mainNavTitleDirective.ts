module demoApp {
    'use strict';
	
    export class MainNavTitleDirective implements ng.IDirective {
        restrict = 'EA';
        scope = {};
        template = "<h1></h1>";
        replace = true;

        constructor(private $location: ng.ILocationService, private MainNavService) {
        }
   
        link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
            scope.$on('$stateChangeSuccess', (next, current) => {
                let title = this.getTitle();
                if(title.length > 1) {
                    element.html(title[0] + ' <i class="fa fa-arrow-right"></i> ' + title[1]);
                } else {
                    element.html(title[0]);
                }
            });
        }
        
        private getTitle(): Array<String> {
            let url = this.$location.url();
            return url.length === 1 ? ['Projects'] : this.MainNavService.createBreadcrumb(url);
        }
        
        static factory(): ng.IDirectiveFactory {
            const directive = ($location: ng.ILocationService, MainNavService: MainNavService) => new MainNavTitleDirective($location, MainNavService);
            directive.$inject = ['$location', 'MainNavService'];
            return directive;
        }
    }
}