'use strict';

/**
 * @ngdoc function
 * @name grouponDatePickerApp.controller:DatepickercomboCtrl
 * @description
 * # DatepickercomboCtrl
 * Controller of the grouponDatePickerApp
 */
angular.module('grouponDatePickerApp')
  .controller('DatepickercomboCtrl', function ($scope) {
      $scope.fromMinDate = $scope.fromStartDate ? $scope.fromStartDate : new Date();
      $scope.fromMaxDate = $scope.fromEndDate;
      $scope.toMinDate = $scope.toStartDate ? $scope.toStartDate : $scope.toMaxDate;
      $scope.toMaxDate = $scope.toEndDate;
      $scope.ngModel = '';

      // Disable weekend selection
      $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.openFromDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.from_opened = true;
      };
      $scope.openToDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if ($scope.from_dt) {
            $scope.to_opened = true;
        } else {
          //   $scope.to_opened = true;
          console.warn('From date is not set');
        }
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];

      $scope.$watchGroup(['from_dt', 'to_dt'], function(newValues) {
          if (newValues.indexOf(undefined) === -1) {
              $scope.ngModel = {startDate:newValues[0], endDate:newValues[1]};
          }
      });
  });
