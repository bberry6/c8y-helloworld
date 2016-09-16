(function(){
   'use strict';
   var deps = ['$scope', '$routeParams','c8yDeviceControl'];
   var controllerFn = function($scope, $routeParams, c8yDeviceControl) {

      $scope.devId = $routeParams.deviceId;
      $scope.operations = [];

      // get init list
      c8yDeviceControl.list({deviceId: $scope.devId}).then(function(ops){
         $scope.operations = ops.slice().reverse();
      });
   };

   angular.module('myapp.backchannel').controller('deviceCtrl', deps.concat(controllerFn));
})(angular);
