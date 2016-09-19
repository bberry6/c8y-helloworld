(function(){
   'use strict';
   var deps = ['$scope', '$routeParams','c8yDeviceControl'];
   var controllerFn = function($scope, $routeParams, c8yDeviceControl) {
      $scope.devId = $routeParams.deviceId;
   };

   angular.module('myapp.backchannel').controller('deviceCtrl', deps.concat(controllerFn));
})(angular);
