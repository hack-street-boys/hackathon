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
	
//		facebookService.getMyLastName().then(function(response) {
//			vm.lastName = response.last_name;
//		});
		
		facebookService.getPhotos().then(function(response) {
			vm.photos = response.data
		});
		
		
	}

})();
