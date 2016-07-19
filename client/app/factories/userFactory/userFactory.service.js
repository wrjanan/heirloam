'use strict';


angular.module('heirloamApp')
	.constant('userApi', {

	/**
         * @constant UPLOAD_URL
         * @type {String}
         */
	API_LINK: '/api/users'

});

angular.module('heirloamApp')
	.factory('userFactory', function ($http, userApi, Auth) {
	// Service logic
	// ...

	var meaningOfLife = 42;
	var photoList = [];
	
	// Public API here
	return {
		someMethod: function () {
			return meaningOfLife;
		},
		addImgurAlbum: function (imgurAlbum, cb) {
			Auth.getCurrentUser(function(user) {
				$http.post(userApi.API_LINK + '/' + user._id + '/album', {
					imgurAlbum:imgurAlbum.id
				})
					.then((result) => {
					cb(result);	
				});
			});
		},
		addImgurPhotoPlant: function (imgurPhoto, cb) {
			Auth.getCurrentUser(function(user) {
				$http.post(userApi.API_LINK + '/' + user._id + '/photo', {
					title:imgurPhoto.title, 
					description:imgurPhoto.description,
					link:imgurPhoto.link,
					imgur:imgurPhoto
				})
					.then((result) => {
					cb(result);	
				});
			});
		},
		addImgurPhoto: function (imgurPhoto, plant, cb) {
			Auth.getCurrentUser(function(user) {
				$http.post(userApi.API_LINK + '/' + user._id + '/photo', {
					photo :{

						title:imgurPhoto.title, 
						description:imgurPhoto.description,
						link:imgurPhoto.link,
						imgur:imgurPhoto	
					},
					plant : {
						name: plant.name,
						info: plant.info,
						species: plant.species,
						dob: plant.dob,
					}
				})
					.then((result) => {
					cb(result);	
				});
			});
		},
		addPhotoToList: function(photoId) {
			this.photoList.push(photoId.toString());
		},
		initPhotoList: function(photoList) {
			this.photoList = photoList;
		},
		getPhotoList: function() {
			return this.photoList;
		}
	};
});
