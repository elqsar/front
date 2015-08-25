module demoApp {
    'use strict';

    export class MainNavService {
   
		createBreadcrumb(url: String): Array<String> {
			let cleanUrl = url.substring(1);
			let urlContent = cleanUrl.split('/');
			if(urlContent.length > 1) {
				return [this.upperCase(urlContent[0]), this.upperCase(urlContent[1])];
			}
			return [this.upperCase(urlContent[0])];
		}
		
		private upperCase(content: string): string {
			return content.substring(0, 1).toUpperCase() + content.substring(1);
		}
	}
}