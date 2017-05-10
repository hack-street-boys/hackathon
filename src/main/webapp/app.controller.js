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
		
	}

})();
