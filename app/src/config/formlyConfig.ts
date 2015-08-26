/// <reference path='../../typings/angular-formly/angular-formly.d.ts' />

module demoApp.formlyConfig {
	export function demoAppFormlyConfig(formlyConfig: AngularFormly.IFormlyConfig) {
		formlyConfig.setType({
			name: 'input',
			template: `
				<div class='form-fieldset form-labeledTextInput'>
					<label class='form-label'>{{ to.label }}</label>
					<input class='form-input' ng-model='model[options.key]' />
					<!--<pre ng-repeat="(key, val) in this">$scope.{{key}} = {{ val | json }}></pre>-->
				</div>
			`
		});
	}
}