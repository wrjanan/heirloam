'use strict';

describe('Directive: hlNavbarAnimate', function () {

  // load the directive's module and view
  beforeEach(module('heirloamApp.hl-navbar-animate'));
  beforeEach(module('components/hl-navbar-animate/hl-navbar-animate.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hl-navbar-animate></hl-navbar-animate>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the hlNavbarAnimate directive');
  }));
});
