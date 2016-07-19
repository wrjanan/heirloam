'use strict';

angular.module('heirloamApp')
	.constant('imgurOptions', {

	/**
         * @constant UPLOAD_URL
         * @type {String}
         */
	UPLOAD_URL: 'https://api.imgur.com/3/image',


	/**
         * @constant UPLOAD_URL
         * @type {String}
         */
	ALBUM_URL: 'https://api.imgur.com/3/album',

	/**
         * @constant UPLOAD_METHOD
         * @type {String}
         */
	UPLOAD_METHOD: 'POST',

	/**
         * @constant API_KEY
         * @type {String}
         */
	API_KEY: '1586721b7c8d0c5'

});


angular.module('heirloamApp')
	.service('imgurService', function ($http, imgurOptions) {
	// AngularJS will instantiate a singleton by calling 'new' on this function
	var imgurService = {};

	// create an anonymous album within imgur
	imgurService.createAlbum = function (user, cb) {
		
		//	ids[]	optional	The image ids that you want to be included in the album.
		//	title	optional	The title of the album
		//	description	optional	The description of the album
		//	privacy	optional	Sets the privacy level of the album. Values are : public | hidden | secret. Defaults to user's privacy settings for logged in users.
		//	layout	optional	Sets the layout to display the album. Values are : blog | grid | horizontal | vertical
		//	cover	optional	The ID of an image that you want to be the cover of the album
		var title = 'tester : ' + user._id;
		var description = user.name + '\'s magnificent testing garden~';
		
		return $http({
			method: imgurOptions.UPLOAD_METHOD,
			url: imgurOptions.ALBUM_URL,
			headers : { Authorization: 'Client-ID ' + imgurOptions.API_KEY },
			data : {title:title, description:description}
		}).then(function(result) {

			var imgurAlbum = result.data.data;

			cb(imgurAlbum);
		}).catch(function(err){
			//alert('err');
			console.log(err);
		});
	};

	// upload a single image to imgur and gets back the imgur model data
	imgurService.uploadImage = function (image, cb) {
		return $http({
			method: imgurOptions.UPLOAD_METHOD,
			url: imgurOptions.UPLOAD_URL,
			headers : { Authorization: 'Client-ID ' + imgurOptions.API_KEY },
			data : image
		}).then(function(result) {
			
			console.log(result.data.data);
			var imgurPhoto = result.data.data;

			cb(imgurPhoto);
		}).catch(function(err){
			//alert('err');
			console.log(err);
		});
	};

	return imgurService;
});
