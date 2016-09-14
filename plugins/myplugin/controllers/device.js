var deps = ['$scope', '$routeParams','c8yDeviceControl'];
var controllerFn = function($scope, $routeParams, c8yDeviceControl) {
   'use strict';

   $scope.devId = $routeParams.deviceId;

   c8yDeviceControl.events.$on('create', function(d) {
      console.log('device operation created: ', d);
   });

   c8yDeviceControl.events.$on('update', function(d) {
      console.log('device operation updated: ', d);
   });
   
   $scope.sendToDevice = function(){
      var shellCmd = {
         deviceId : $scope.devId,
         c8y_Command: {
            text: "date"
         },
         description: "My Second Shell Command"
      }
       c8yDeviceControl.create(shellCmd).then(function(n){
         console.log('next?: ', n);
      })

      c8yDeviceControl.list({deviceId: $scope.devId}).then(function(ops){
         console.log('ops: ', ops);
      });
      console.log('clicked');
   }
};

angular.module('myapp.backchannel').controller('deviceCtrl', deps.concat(controllerFn));
