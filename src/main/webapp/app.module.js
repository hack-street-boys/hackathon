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
			};
	}])
	.factory('facebookService', function($q) {
    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});;

})();
