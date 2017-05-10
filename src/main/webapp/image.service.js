(function() {
	'use strict';

	angular.module("fbApp")
	.factory('imageService', function($q, $http) {
		
		
    return {
    	getImages: function(imageList) {
            var images = imageList;
            var metaDataImages = [];
    		
            angular.forEach(imageList, function(url) {
            	var metaData = getImageMetaData(url).then(function(metaData) {
            		metaDataImages.push({image: url, metaData: metaData.responses[0]});
				}, function(error) {
					console.log(error);
				});
            });     
            return metaDataImages;
    	}
    }
    
    
	  function getImageMetaData(imageUrl) {
          var CV_URL = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBqOBXQ6mRoCDxLyB6gBRyvAeoD_p2FmZ8";

		  var params = {
				 imageUrl: imageUrl
		  };
		  var serializedData = $.param(params);
		  
		  return $http({
			    method: 'POST',
			    url: '/base64',
			    data: serializedData,
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    }}).then(function(response) {
				
				 var request = {
						    requests: [{
						      image: {
						        content: response.data.value
						      },
						      features: [{
						        type: "LABEL_DETECTION",
						        maxResults: 200
						      },
						      {
							        type: "WEB_DETECTION",
							        maxResults: 200
							  },
							  {
							        type: "LANDMARK_DETECTION",
							        maxResults: 200
							  }]
						    }]
						  };
				
				
				 return $http.post(CV_URL, JSON.stringify(request)).then(function(response) {
						return response.data;
					}, function(error) {
						console.log(error);
				});

			}, function(error) {
				console.log(error);
		});
		  
	  }
    
    
});

})();
