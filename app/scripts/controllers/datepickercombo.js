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
      $scope.today = function() {
        $scope.from_dt = new Date();
      };
      $scope.today();

      $scope.clear = function () {
        $scope.from_dt = null;
      };

      // Disable weekend selection
      $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

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

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 2);
      $scope.events =
        [
          {
            date: tomorrow,
            status: 'full'
          },
          {
            date: afterTomorrow,
            status: 'partially'
          }
        ];

      $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i=0;i<$scope.events.length;i++){
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
      };
  });
