(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("AppController", AppController);

	AppController.$inject = ["$state", "facebookService", "user"];
	/* @ngInject */
	function AppController($state, facebookService, user) {
		var vm = this;
		
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
            return vm.chunk(cleanedData,4);
          };
		  vm.chunk = function (arr, chunkSize) {
			  var R = [];
			  for (var i=0,len=arr.length; i<len; i+=chunkSize)
			    R.push(arr.slice(i,i+chunkSize));
			  return R;
		  }
	}

})();
