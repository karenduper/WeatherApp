'use strict';

describe('Controller: Assignment6Ctrl', function () {

  // load the controller's module
  beforeEach(module('xpertwandererApp'));

  var Assignment6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Assignment6Ctrl = $controller('Assignment6Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));



});
