'use strict';

/**
 * @ngdoc function
 * @name grouponDatePickerApp.controller:CustomcompletionCtrl
 * @description
 * # CustomcompletionCtrl
 * Controller of the grouponDatePickerApp
 */
angular.module('grouponDatePickerApp')
  .controller('CustomcompletionCtrl', function ($scope, $http) {
      $scope.finalList = [];
      $scope.showSuggestion = false;

      $http.get('/names.json').
      success(function(data) {
        $scope.suggestionList = data;
      }).
      error(function(data) {
          console.log(data);
      });

      $scope.addToFinalList = function(item) {
        if ($scope.mode === 'select') {
            $scope.searchStr = item.name;
            $scope.ngModel = item;
            $scope.showSuggestion = false;
        } else {
            $scope.finalList.push(item);
            $scope.ngModel = $scope.finalList;
            $scope.searchStr = null;
        }
      };

      $scope.removeItem = function(index) {
        $scope.finalList.splice(index, 1);
      };

      $scope.isAddedToFinalList = function(item) {
          return ($scope.finalList.indexOf(item) === -1);
      };

      $scope.populateSuggestionList = function(searchStr) {
          if (searchStr.length < 3) {
              $scope.showSuggestion = false;
          } else {
              $scope.showSuggestion = true;
          }
      };
    });
