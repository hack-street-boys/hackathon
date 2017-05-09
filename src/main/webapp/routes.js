(function() {
	"use strict";

	angular
		.module("fbApp")
		.config(loginRouter);

	loginRouter.$inject = ["$stateProvider", "$urlRouterProvider"];
	/* @ngInject */
	function loginRouter($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state("login", {
				url: "",
				templateUrl: "login-content.html",
				controller: "LoginController",
				controllerAs: "vm",
				params: {
//					userObj: {}
				},
				resolve: {
//					userObj: ["$stateParams", "loginService", function($stateParams, loginService) {
//						return loginService.login($stateParams.userObj);
//					}]
				}
			});
//			
	}
})();