'use strict';

angular.module('heirloamApp')
	.directive('garden', function (Auth, userFactory) {
	return {
		templateUrl: 'components/garden/garden.html',
		restrict: 'EA',
		link: function () {
			//scope, element, attrs
			var images = document.querySelector('images');
			var photos = [];
			
			Auth.getCurrentUser(function(user) {
				userFactory.initPhotoList(user.photos);
				photos = userFactory.getPhotoList();

				var img = new Image();				
				// var br = document.createElement('br');

				photos.forEach(function(photoId) {

					img = new Image();
					img.src = 'http://i.imgur.com/' + photoId + '.jpg';
					img.width = 300;
					images.appendChild(img);
				});
			});

		}
	};
});
