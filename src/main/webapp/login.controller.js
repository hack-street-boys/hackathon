(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state", "facebookService", "$anchorScroll"];
	/* @ngInject */
	function LoginController($state, facebookService, $anchorScroll) {
		var vm = this;
	
		vm.goToApp = goToApp;
		vm.deAuth = deAuth;
		
		function goToApp() {
			$state.go("app");
			$anchorScroll("body");
		}
		
		function deAuth() {
			facebookService.deAuth();
			
		}
	}

})();
