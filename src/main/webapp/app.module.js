(function() {
	'use strict';

	angular.module("fbApp", [
		// Angular Modules
		
		//"ngAnimate",
		//"ngMessages",
		//"ngSanitize",

		// 3rd Party Modules
		"ui.router",
		//"ct.ui.router.extras",
		//"ui.bootstrap",
	])
	.run(['$rootScope', '$window',
        function($rootScope, $window) {
			$window.fbAsyncInit = function() {
			    FB.init({ 
			      appId: '1727111137586551',
			      status: true,
			      cookie: true, 
			      xfbml: true,
			      version: 'v2.9'
			    });
			}
			

	}])

})();
