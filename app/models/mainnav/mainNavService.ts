module demoApp {
    'use strict';

    export class MainNavService {
   
		createBreadcrumb(url: String) {
			console.log(url);
			url = url.replace('/', '');
			return url.substring(0, 1).toUpperCase() + url.substring(1);
		}
	}
}