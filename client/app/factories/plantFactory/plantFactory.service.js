'use strict';

angular.module('heirloamApp')
	.constant('plantApi', {

	/**
         * @constant UPLOAD_URL
         * @type {String}
         */
	API_LINK: '/api/plants'

});

angular.module('heirloamApp')
  .factory('plantFactory', function (plantApi) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
