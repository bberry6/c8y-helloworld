
var deps = ['$scope', '$routeParams','c8yDeviceControl'];
var controllerFn = function($scope, $routeParams, c8yDeviceControl) {

   'use strict';

   $scope.devId = $routeParams.deviceId;
   $scope.operations = [];

   c8yDeviceControl.list({deviceId: $scope.devId}).then(function(ops){
      $scope.operations = $scope.operations.concat(ops);
   });
};

angular.module('myapp.backchannel').controller('deviceCtrl', deps.concat(controllerFn));
