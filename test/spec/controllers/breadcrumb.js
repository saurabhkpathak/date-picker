'use strict';

describe('Controller: BreadcrumbCtrl', function () {

  // load the controller's module
  beforeEach(module('grouponDatePickerApp'));

  var BreadcrumbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BreadcrumbCtrl = $controller('BreadcrumbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BreadcrumbCtrl.awesomeThings.length).toBe(3);
  });
});
