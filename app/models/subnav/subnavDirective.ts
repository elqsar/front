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
                        <button ng-click="createNew(page.name)" class="button alert">{{ button.title }}</button>
                    </li>
                <ul>
            </div>
        `;
        replace = true;

        constructor(private $state: ng.ui.IStateService) {
        }
   
        link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
            scope.createNew = (page: string) => {
                this.$state.go(page);
            }
        }
        
        static factory(): ng.IDirectiveFactory {
            const directive = ($state: ng.ui.IStateService) => new SubnavDirective($state);
            directive.$inject = ['$state'];
            return directive;
        }
    }
}