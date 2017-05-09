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
		})
		.state("app", {
			url: "/app",
			templateUrl: "app-content.html",
			controller: "AppController",
			controllerAs: "vm",
			params: {
				user: null
			},
			resolve: {
				user: ["$stateParams", "facebookService", function($stateParams, facebookService) {
					return facebookService.getMyLastName();
					
				}]
			}
		});
		
	}
})();