(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("AppController", AppController);

	AppController.$inject = ["$state", "facebookService"];
	/* @ngInject */
	function AppController($state, facebookService) {
		var vm = this;
	
		facebookService.getMyLastName().then(function(response) {
			vm.lastName = response.last_name;
		});
		
		facebookService.getPhotos().then(function(response) {
			vm.photos = response.data
		});
		
		
	}

})();
