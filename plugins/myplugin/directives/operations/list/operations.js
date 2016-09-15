
function DirectiveCtrl($scope, c8yDeviceControl, c8yRealtime){

   console.log('this id: ', this.$id);

   var statuses = c8yDeviceControl.status;
   var channel = '/operations/*';
   var rtActions = c8yRealtime.realtimeActions();

   function msgHandler(evt, data) {
      console.log('event and data: ', evt, data);
   };

   function onDestroy() {
      c8yRealtime.stop(this.$id, channel);
   }

   c8yRealtime.addListener(this.$id, channel, rtActions.CREATE, msgHandler);
   c8yRealtime.addListener(this.$id, channel, rtActions.UPDATE, msgHandler);
   c8yRealtime.start(this.$id, channel);

}

DirectiveCtrl.$inject = ["$scope", 'c8yDeviceControl', 'c8yRealtime'];

angular.module('myapp.backchannel').directive('stwOperations', function() {
   return {
      restrict: "AE",
      scope: true,
      bindToController: {
         operations: '='
      },
      controllerAs: 'ctrl',
      templateUrl: ':::PLUGIN_PATH:::/directives/operations/list/operations.html',
      controller: DirectiveCtrl
   }
});
