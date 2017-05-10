(function() {
	'use strict';

	angular.module("fbApp")
	.factory('imageService', function($q, $http) {
    return {
    	getImages: function(imageList) {
            var images = imageList;
            return images;
        }
    }
});

})();
