(function() {
	'use strict';

	angular.module("fbApp")
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
        },
        getPhotos: function() {
        	var deferred = $q.defer();
        	FB.api('/me/photos', function(response) {
        		if (!response || response.error) {
        			deferred.reject('Error occured');
        		} else {
        			deferred.resolve(response);
        		}
        	});
        	return deferred.promise;
        },
        deAuth: function() {
        	var deferred = $q.defer();
        	FB.api("/me/permissions", "delete", function(response) {
        		if (!response || response.error) {
        			deferred.reject('Error occured');
        		} else {
        			deferred.resolve(response);
        		}
        	});
        	return deferred.promise;
        }
    }
});

})();
