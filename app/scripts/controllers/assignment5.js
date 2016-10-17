'use strict';

/**
 * @ngdoc function
 * @name xpertwandererApp.controller:Assignment5Ctrl
 * @description
 * # Assignment5Ctrl
 * Controller of the xpertwandererApp
 */
angular.module('xpertwandererApp')
  .controller('Assignment5Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getClima = function(){
      var data = {ciudades:[]};
      var arregloCiudades = $scope.ciudades.split(",");
      data.ciudades = arregloCiudades;
      var url = "https://2wc47lxzk2.execute-api.us-east-1.amazonaws.com/dev/k-multipleFunction"

      $http.put(url, data)
        .success(function(data){
          $scope.ClimaCiudad = data;
        })
        .error(function(error){
          alert(error);
        })
     };


    $scope.login = function(valid){
      var url = "https://2wc47lxzk2.execute-api.us-east-1.amazonaws.com/dev/login";
      var credentials ={
        "username":"foo",
        "password": "laTucita",

      };
      credentials.username = valid ? "elTorito" : "foo";

      $http.post(url, credentials)
        .success(function(data){
          localStorage.setItem("token", data.token);

        })
        .error(function(error){
          alert(error);
        });
    };
  });


