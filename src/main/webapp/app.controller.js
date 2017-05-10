(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("AppController", AppController);

	AppController.$inject = ["$state", "facebookService", "user", "photos"];
	/* @ngInject */
	function AppController($state, facebookService, user, photos) {
		var vm = this;
		
		vm.user = user;
		vm.photos = photos;
		
	}

})();
