(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("AppController", AppController);

	AppController.$inject = ["$state", "facebookService", "user", "$http", "$anchorScroll"];
	/* @ngInject */
	function AppController($state, facebookService, user, $http, $anchorScroll) {
		var vm = this;
		
		var CV_URL = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBqOBXQ6mRoCDxLyB6gBRyvAeoD_p2FmZ8";
		
		vm.cleanData = [];
		vm.imageList = [];
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

	 vm.buildImageList = function(myObj){
		// console.log(myObj.attributes("class"));
		 if(vm.imageList.length >= 5){
			 vm.imageList.splice(0, 1);
		 }
		 vm.imageList.push(myObj.image.source);
		
	 }
	vm.filterCheck();
		
		  vm.goToResults = goToResults;
			
			function goToResults() {
				//console.log(vm.imageList);
				$state.go("results", {user: vm.user, imageList: vm.imageList});
				$anchorScroll("body");
			}
	

	}

})();
