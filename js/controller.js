/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var tableApp = angular.module('tableApp', []);
      tableApp.controller('TableCtrl', function ($scope, $http){
        $http.get('json/content.json').success(function(data) {
          $scope.content = data;
        });
      });