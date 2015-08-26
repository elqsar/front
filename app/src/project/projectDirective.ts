module demoApp {
    'use strict';
	
    export class ProjectDirective implements ng.IDirective {
        restrict = 'EA';
        scope = {
			project: '='
        };
        template = `
			
		`;
        replace = true;

        constructor() {
        }
   
        link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
        }
        
        static factory(): ng.IDirectiveFactory {
            const directive = () => new ProjectDirective();
            return directive;
        }
    }
}