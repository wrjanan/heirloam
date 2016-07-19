'use strict';

angular.module('heirloamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('camera', {
        url: '/camera',
        template: '<camera></camera>',
		authenticate : true
      });
  });
