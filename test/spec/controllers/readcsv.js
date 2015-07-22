'use strict';

describe('Controller: ReadcsvCtrl', function () {

  // load the controller's module
  beforeEach(module('grouponDatePickerApp'));

  var ReadcsvCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadcsvCtrl = $controller('ReadcsvCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReadcsvCtrl.awesomeThings.length).toBe(3);
  });
});
