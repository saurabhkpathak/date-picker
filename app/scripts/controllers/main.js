'use strict';

/**
 * @ngdoc function
 * @name grouponDatePickerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grouponDatePickerApp
 */
angular.module('grouponDatePickerApp')
  .controller('MainCtrl', function ($scope) {
      $scope.dirFromStartDate = new Date('July 23, 2015 00:00:00');
      $scope.dirFromEndDate = new Date('July 30, 2015 00:00:00');
      $scope.dirToStartDate = new Date('August 10, 2015 00:00:00');
      $scope.dirToEndDate = new Date('August 15, 2015 00:00:00');
  });
