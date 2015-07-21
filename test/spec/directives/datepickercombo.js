'use strict';

describe('Directive: datePickerCombo', function () {

  // load the directive's module
  beforeEach(module('grouponDatePickerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-picker-combo></date-picker-combo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the datePickerCombo directive');
  }));
});
