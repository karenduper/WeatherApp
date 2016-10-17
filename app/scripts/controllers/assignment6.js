'use strict';

/**
 * @ngdoc function
 * @name xpertwandererApp.controller:Assignment6Ctrl
 * @description
 * # Assignment6Ctrl
 * Controller of the xpertwandererApp

angular.module('xpertwandererApp')
  .controller('Assignment6Ctrl', function ($scope, $http) {
    $scope.postMessage = function(){
      var params = {
        "message" : $scope.message

      };
      $http.post("https://2wc47lxzk2.execute-api.us-east-1.amazonaws.com/dev/webLambda-kar", params)
        .success(function(data){
        $scope.response = data;
      })
        .error(function(error){
          alert(error);
        });
    }



  });


 */
