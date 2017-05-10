(function() {
	'use strict';

	angular.module("fbApp")
	.factory('imageService', function($q, $http) {
    return {
    	getImages: function() {
            var images = [];
            return images;
        }
    }
});

})();
