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
        .when('/Assignment4', {
            templateUrl: 'views/assignment4.html',
            controller: 'Assignment4Ctrl',
            controllerAs: 'Assignment4'
        })
      .when('/GitLink', {
        templateUrl: 'views/gitlink.html',
        controller: 'gitlinkCtrl',
        controllerAs: 'gitlink'
      })
      .when('/Assignment5', {
        templateUrl: 'views/assignment5.html',
        controller: 'Assignment5Ctrl',
        controllerAs: 'Assignment5'
      })
      .when('/Assignment6', {
        templateUrl: 'views/assignment6.html',
        controller: 'Assignment6Ctrl',
        controllerAs: 'Assignment6'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
