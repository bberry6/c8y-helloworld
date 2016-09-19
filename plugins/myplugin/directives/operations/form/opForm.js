(function(){
   'use strict';
   function DirectiveCtrl($scope, c8yDeviceControl){

      $scope.sendToDevice = function(){
         var shellCmd = {
            deviceId : $scope.deviceid,
            c8y_Command: {
               text: $scope.command
            },
            description: $scope.description
         };
         console.log('sending shell cmd: ', shellCmd);
         c8yDeviceControl.create(shellCmd);
      };
   }

   DirectiveCtrl.$inject = ['$scope','c8yDeviceControl'];

   angular.module('myapp.backchannel').directive('stwOperationsForm', function() {
      return {
         restrict: "AE",
         scope: {
            deviceid: '='
         },
         templateUrl: ':::PLUGIN_PATH:::/directives/operations/form/opForm.html',
         controller: DirectiveCtrl
      };
   });
})(angular);
