'use strict';

angular.module('heirloamApp.navbar')
	.directive('navbar', () => ({
	templateUrl: 'components/navbar/navbar.html',
	restrict: 'E',
	controller: 'NavbarController',
	controllerAs: 'nav'
}));
