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
      .when('/Assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl',
        controllerAs: 'Assignments'
      })
      .when('/Assignment1', {
        templateUrl: 'views/assignment1.html',
        controller: 'Assignment1Ctrl',
        controllerAs: 'Assignment1'
      })
      .when('/Assignment2', {
        templateUrl: 'views/assignment2.html',
        controller: 'Assignment2Ctrl',
        controllerAs: 'Assignment2'
      })
      .when('/Assignment3', {
        templateUrl: 'views/assignment3.html',
        controller: 'Assignment3Ctrl',
        controllerAs: 'Assignment3'
      })
      .when('/GitLink', {
        templateUrl: 'views/gitlink.html',
        controller: 'gitlinkCtrl',
        controllerAs: 'gitlink'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
