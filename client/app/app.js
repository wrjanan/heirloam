'use strict';

angular.module('heirloamApp', [
	'heirloamApp.auth',
	'heirloamApp.admin',
	'heirloamApp.constants',
	'heirloamApp.navbar',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ui.router',
	'validation.match',
	'angular-loading-bar'
])
	.config(function($urlRouterProvider, $locationProvider) {
	$urlRouterProvider
		.otherwise('/');

	$locationProvider.html5Mode(true);
});
