'use strict';

describe('Controller: CustomcompletionCtrl', function () {

  // load the controller's module
  beforeEach(module('grouponDatePickerApp'));

  var CustomcompletionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomcompletionCtrl = $controller('CustomcompletionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomcompletionCtrl.awesomeThings.length).toBe(3);
  });
});
