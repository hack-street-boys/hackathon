(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state", "facebookService"];
	/* @ngInject */
	function LoginController($state, facebookService) {
		var vm = this;
	
		vm.goToApp = goToApp;
		vm.deAuth = deAuth;
		
		function goToApp() {
			$state.go("app");
		}
		
		function deAuth() {
			facebookService.deAuth();
			
		}
	}

})();
