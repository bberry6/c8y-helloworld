(function(){
   'use strict';
   function DirectiveCtrl($scope, c8yDeviceControl, c8yRealtime){

      $scope.operations = [];

      // get init list
      c8yDeviceControl.list({deviceId: $scope.deviceid}).then(function(ops){
         $scope.operations = ops.slice().map(function(i){
            i.isOpen = false;
            return i;
         });
      });

      var statuses = $scope.statuses = c8yDeviceControl.status;
      var channel = '/operations/*';
      var rtActions = c8yRealtime.realtimeActions();

      function msgHandler(evt, data) {
         if(evt.name === 'CREATE'){
            $scope.operations.push(data);
         }
         if(evt.name === 'UPDATE'){
            var idx = R.findIndex(R.propEq('id', data.id))($scope.operations)
            if(idx !== -1){
               $scope.operations[idx] = data;
            }
         }
         console.log('event and data: ', evt, data);
      };

      function onDestroy() {
         c8yRealtime.stop($scope.$id, channel);
      }

      c8yRealtime.addListener($scope.$id, channel, rtActions.CREATE, msgHandler);
      c8yRealtime.addListener($scope.$id, channel, rtActions.UPDATE, msgHandler);
      c8yRealtime.start($scope.$id, channel);

      $scope.openIt = function(op){
         console.log('opening op: ', op);
         op.isOpen = !op.isOpen;
         console.log($scope.operations);
      }
   }

   DirectiveCtrl.$inject = ["$scope", 'c8yDeviceControl', 'c8yRealtime'];

   angular.module('myapp.backchannel').directive('stwOperations', function() {
      return {
         restrict: "AE",
         scope: {
            deviceid: '='
         },
         templateUrl: ':::PLUGIN_PATH:::/directives/operations/list/operations.html',
         controller: DirectiveCtrl
      }
   });
})(angular);
