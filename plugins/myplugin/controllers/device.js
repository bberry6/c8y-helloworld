(function(){
   'use strict';
   var deps = ['$scope', '$routeParams','c8yDeviceControl', 'c8yDevices'];
   var controllerFn = function($scope, $routeParams, c8yDeviceControl, c8yDevices) {

      $scope.devId = $routeParams.deviceId;
      c8yDevices.detail($scope.devId).then(function(dev){
         $scope.devName = dev.data.name;
      });
   };

   angular.module('myapp.backchannel').controller('deviceCtrl', deps.concat(controllerFn));
})(angular);
