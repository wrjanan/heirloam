'use strict';

angular.module('heirloamApp.hl-navbar-animate', [])
	.directive('hlNavbarAnimate', function () {
	return {
		restrict: 'EA',
		link: function (scope, element, attrs) {
			console.log(scope);
			console.log(element);
			console.log(attrs);
			console.log(angular.module('heirloamApp'));

			var isOpen = true;

			element.css({
				position: 'float',
				border: '1px solid red',
				backgroundColor: 'lightgrey',
				cursor: 'pointer'
			});



			function animate() {
				console.log( isOpen );
				
				
				isOpen = !isOpen;
				
			}
			

			element.on( "click", animate );
		}
	};
});
