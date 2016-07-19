'use strict';
(function(){

	class CameraComponent {
		constructor($scope) {

			$scope.message= 'hello there~';
		}

	}

	angular.module('heirloamApp')
		.component('camera', {
		templateUrl: 'app/camera/camera.html',
		controller: CameraComponent
	});

})();