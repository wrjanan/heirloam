'use strict';

angular.module('heirloamApp')
	.service('photoService', function (Auth, imgurService, userFactory) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var photoService = {};

	photoService.addPhoto = function(imageObj) {

		// call imgur service to upload image
		return imgurService.uploadImage(imageObj.image, function(imgurPhoto) {
			// save imgur ID to user object
			// save imgur ID to user object and plant object
			return userFactory.addImgurPhoto(imgurPhoto, imageObj.plant, function(result) {
				console.log(result);

				userFactory.addPhotoToList(imgurPhoto.id);
				return imgurPhoto;
			});
		});
	};

	// function to upload image to album
	// function

	return photoService;
});

/*


// check for imgur album id
// if imgur album id is null, create album and get album id
if(user.imgurAlbumID === undefined) {
	return imgurService.createAlbum(user, function(imgurAlbum) {
		console.log(imgurAlbum);

	})
}


	// else add image to imgur album

*/