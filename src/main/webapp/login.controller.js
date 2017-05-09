(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state"];
	/* @ngInject */
	function LoginController($state) {
		var vm = this;
	
		vm.getMyLastName = getMyLastName;
		

		function getMyLastName() {
			facebookService.getMyLastName().then(function(response) {
				vm.lastName = response.last_name;
			});
		}
			
	}

})();
