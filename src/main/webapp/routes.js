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
			templateUrl: "form.html",
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
		})
		.state("results", {
			url: "/results",
			templateUrl: "results.html",
			controller: "ResultsController",
			controllerAs: "vm",
			params: {
				user: null,
				images: null
			},
			resolve: {
				images: ["$stateParams", "imageService", function($stateParams, imageService) {
					return imageService.getImages();
				}],
				user: ["$stateParams", function($stateParams) {
				return $stateParams.user;
			}]
			}
		});
		
	}
})();