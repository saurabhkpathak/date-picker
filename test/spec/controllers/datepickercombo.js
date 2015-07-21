'use strict';

describe('Controller: DatepickercomboCtrl', function () {

  // load the controller's module
  beforeEach(module('grouponDatePickerApp'));

  var DatepickercomboCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatepickercomboCtrl = $controller('DatepickercomboCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatepickercomboCtrl.awesomeThings.length).toBe(3);
  });
});
