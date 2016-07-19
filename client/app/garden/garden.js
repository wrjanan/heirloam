'use strict';

angular.module('heirloamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('garden', {
        url: '/garden',
        template: '<gardenwall></gardenwall>'
      });
  });
