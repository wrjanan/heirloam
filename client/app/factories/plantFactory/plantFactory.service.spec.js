'use strict';

describe('Service: plantFactory', function () {

  // load the service's module
  beforeEach(module('heirloamApp.plantFactory'));

  // instantiate service
  var plantFactory;
  beforeEach(inject(function (_plantFactory_) {
    plantFactory = _plantFactory_;
  }));

  it('should do something', function () {
    expect(!!plantFactory).toBe(true);
  });

});
