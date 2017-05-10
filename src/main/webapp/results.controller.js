(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("ResultsController", ResultsController);

	ResultsController.$inject = ["$state", "facebookService", "user", "$http", "imageList"];
	/* @ngInject */
	function ResultsController($state, facebookService, user, $http, imageList) {
		var vm = this;
		
		 vm.imageList = imageList;
		 vm.user = user;
		 console.log("controller");
		 console.log(user);
		 console.log(imageList);

		  vm.getImageMetaData = function() {
			  
			  var params = {
					 imageUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/17903680_10154532217178927_5986146878379147924_n.jpg?oh=57980a335802f97fd814f0f1ed7ea5b8&oe=59825973"
			  };
			  
			  var serializedData = $.param(params);
			  console.log(serializedData);
			  
			  //var encodedUrl = encodeURI("https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/17903680_10154532217178927_5986146878379147924_n.jpg?oh=57980a335802f97fd814f0f1ed7ea5b8&oe=59825973");
			  $http({
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
							console.log(response);
						}, function(error) {
							console.log(error);
						});

				}, function(error) {
					console.log(error);
			});
			  
		  }
			 
	
	}

})();
