'use strict';

/**
 * @ngdoc directive
 * @name grouponDatePickerApp.directive:customCompletion
 * @description
 * # customCompletion
 */
angular.module('grouponDatePickerApp')
  .directive('customCompletion', function () {
    return {
      templateUrl: 'views/customcompletion.html',
      restrict: 'E',
      scope: {
          mode: '@',
          ngModel: '='
      },
      controller: 'CustomcompletionCtrl'
    };
  });
