(function() {
	'use strict';

	angular.module("fbApp")
	.factory('facebookService', function($q) {
    return {
    	getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
               fields: 'id,name,gender,education,email,birthday'
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
        	FB.api('/me/', { fields: 'albums{photos.limit(10){picture,images}}' }, function(response) {
        		if (!response || response.error) {
        			deferred.reject('Error occured');
        		} else {
//        			angular.forEach(vm.funds, function(fund) {
//    					if (fund.sellAllShares) {
//    						vm.transaction.sellAllShares = true;
//    					}
//    					if (fund.hasAutomaticPlan) {
//    						vm.transaction.hasAutomaticPlan = true;
//    					}
//    				});
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
