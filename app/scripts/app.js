'use strict';

/**
 * @ngdoc overview
 * @name xpertwandererApp
 * @description
 * # xpertwandererApp
 *
 * Main module of the application.
 */
angular
  .module('xpertwandererApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Assignment1', {
        templateUrl: 'views/assignment1.html',
        controller: 'Assignment1Ctrl',
        controllerAs: 'Assignment1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
