'use strict';

describe('Directive: customCompletion', function () {

  // load the directive's module
  beforeEach(module('grouponDatePickerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom-completion></custom-completion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customCompletion directive');
  }));
});
