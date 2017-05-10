(function() {
	'use strict';

	angular.module("login", [
		"login.core",
		"login.secondary",
		"login.verify",
		"login.otp",
		"login.resetPassword",
		"login.profile",
		"login.common-ui",
		"login.error"
	]);
})();
