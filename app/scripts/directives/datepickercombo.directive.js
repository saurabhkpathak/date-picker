'use strict';

/**
 * @ngdoc directive
 * @name grouponDatePickerApp.directive:datePickerCombo
 * @description
 * # datePickerCombo
 */
angular.module('grouponDatePickerApp')
  .directive('datePickerCombo', function () {
    return {
      templateUrl: 'views/datePickerCombo.html',
      restrict: 'E',
      controller: 'DatepickercomboCtrl',
      scope: {
          ngModel: '=',
          fromStartDate: '=',
          fromEndDate: '=',
          toStartDate: '=',
          toEndDate: '='
      }
    };
  });
