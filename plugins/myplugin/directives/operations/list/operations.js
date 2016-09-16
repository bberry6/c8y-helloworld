(function(){
   'use strict';
   function DirectiveCtrl($scope, c8yDeviceControl, c8yRealtime){

      var statuses = c8yDeviceControl.status;
      var channel = '/operations/*';
      var rtActions = c8yRealtime.realtimeActions();

      function msgHandler(evt, data) {
         console.log('event and data: ', evt, data);
      };

      function onDestroy() {
         c8yRealtime.stop($scope.$id, channel);
      }

      c8yRealtime.addListener($scope.$id, channel, rtActions.CREATE, msgHandler);
      c8yRealtime.addListener($scope.$id, channel, rtActions.UPDATE, msgHandler);
      c8yRealtime.start($scope.$id, channel);
   }

   DirectiveCtrl.$inject = ["$scope", 'c8yDeviceControl', 'c8yRealtime'];

   angular.module('myapp.backchannel').directive('stwOperations', function() {
      return {
         restrict: "AE",
         scope: {
            operations: '='
         },
         templateUrl: ':::PLUGIN_PATH:::/directives/operations/list/operations.html',
         controller: DirectiveCtrl
      }
   });
})(angular);
