'use strict';
(function(){

	class GardenComponent {
		constructor($scope) {
			$scope.message = 'Hello';
		}
	}

	angular.module('heirloamApp')
		.component('gardenwall', {
		templateUrl: 'app/garden/garden.html',
		controller: GardenComponent
	});

})();
