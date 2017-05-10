(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("AppController", AppController);

	AppController.$inject = ["$state", "facebookService", "user", "$http"];
	/* @ngInject */
	function AppController($state, facebookService, user, $http) {
		var vm = this;
		
		var CV_URL = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBqOBXQ6mRoCDxLyB6gBRyvAeoD_p2FmZ8";
		
		vm.cleanData = [];
		vm.user = user;
		vm.profilePicture = user.picture.data;
		
		vm.filterCheck = function () {
			var cleanedData = [];
            var cleanPhotos = user.albums.data;
            var imageList, image2;
            for(var i=0;i<cleanPhotos.length;i++){
            	imageList = cleanPhotos[i].photos.data
                for(var j=0;j<imageList.length;j++){
                	image2 = imageList[j].images
                	for(var k=0;k<image2.length;k++){
                		if(image2[k].height=="720" && image2[k].width=="720"){
                			if(cleanedData.length < 12){
                				cleanedData.push(image2[k]);
                			}
                			else {
                				break;
                			}
                		}
                	}
                }
            }
            vm.cleanData = vm.chunk(cleanedData,4);
            return vm.cleanData;
          };
		  vm.chunk = function (arr, chunkSize) {
			  var R = [];
			  for (var i=0,len=arr.length; i<len; i+=chunkSize)
			    R.push(arr.slice(i,i+chunkSize));
			  return R;
		  };
		  vm.calculateAge = function () { // birthday is a date
			  	var myBday = new Date(vm.user.birthday);
			    var ageDifMs = Date.now() - myBday.getTime();
			    var ageDate = new Date(ageDifMs); // miliseconds from epoch
			    return Math.abs(ageDate.getUTCFullYear() - 1970);

		 }
		  vm.filterCheck();
		 

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
		
		  vm.goToResults = goToResults;
			
			function goToResults() {
				$state.go("results", {user: user});
			}
	
	}

})();
