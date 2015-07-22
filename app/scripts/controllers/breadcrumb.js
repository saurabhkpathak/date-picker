'use strict';

/**
 * @ngdoc function
 * @name grouponDatePickerApp.controller:BreadcrumbCtrl
 * @description
 * # BreadcrumbCtrl
 * Controller of the grouponDatePickerApp
 */
angular.module('grouponDatePickerApp')
  .controller('BreadcrumbCtrl', function($scope, $http) {

    $scope.finalList = [];

    $http.get('/names.json').
    success(function(data) {
      $scope.suggestionList = data;
    }).
    error(function(data) {});

    $scope.addToFinalList = function(item) {
      $scope.finalList.push(item);
    };

    $scope.removeItem = function(index) {
      $scope.finalList.splice(index, 1);
    };

    $scope.isAddedToFinalList = function(item) {
        return ($scope.finalList.indexOf(item) === -1);
    };
  });
