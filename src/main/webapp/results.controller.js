(function() {
	'use strict';

	angular
		.module("fbApp")
		.controller("ResultsController", ResultsController);

	ResultsController.$inject = ["$state", "facebookService", "user", "$http", "imageList"];
	/* @ngInject */
	function ResultsController($state, facebookService, user, $http, imageList) {
		var vm = this;
		
		 vm.imageList = imageList;
		 vm.user = user;
		
		 console.log(imageList);
	
	}

})();
