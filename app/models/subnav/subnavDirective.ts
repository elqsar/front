module demoApp {
    'use strict';
	
    export class SubnavDirective implements ng.IDirective {
        restrict = 'EA';
        scope = {
            tabs: "=",
            button: "=",
            page: '='
        };
        template = `
            <div class="tabs">
                <ul class="tabs-menu">
                    <li ng-repeat='tab in tabs track by $index'>
                        <a class="tabs-item" href="">{{ tab.name }}</a>
                    </li>
                </ul>
                <ul class="tabs-menu add-new-button">
                    <li>
                        <button ng-click="createNew(page)" class="button alert">{{ button.title }}</button>
                    </li>
                <ul>
            </div>
        `;
        replace = true;

        constructor() {
        }
   
        link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
        }
        
        static factory(): ng.IDirectiveFactory {
            const directive = () => new SubnavDirective();
            return directive;
        }
    }
}