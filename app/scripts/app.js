'use strict';

/**
 * @ngdoc overview
 * @name grouponDatePickerApp
 * @description
 * # grouponDatePickerApp
 *
 * Main module of the application.
 */
angular
  .module('grouponDatePickerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/date', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/readCsv', {
        templateUrl: 'views/readcsv.html',
        controller: 'ReadcsvCtrl',
        controllerAs: 'readCsv'
      })
      .otherwise({
        redirectTo: '/readCsv'
      });
  });
