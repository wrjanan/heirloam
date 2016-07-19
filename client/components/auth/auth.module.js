'use strict';

angular.module('heirloamApp.auth', [
  'heirloamApp.constants',
  'heirloamApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
