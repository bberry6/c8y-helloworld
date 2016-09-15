
function DirectiveCtrl($scope, c8yDeviceControl){

   this.command = '';
   this.description = '';

   $scope.sendToDevice = function(){
      var shellCmd = {
         deviceId : this.deviceId,
         c8y_Command: {
            text: this.command
         },
         description: this.description
      }
       c8yDeviceControl.create(shellCmd);
   }

}

DirectiveCtrl.$inject = ["$scope",'c8yDeviceControl'];

angular.module('myapp.backchannel').directive('stwOperationsForm', function() {
   return {
      restrict: "AE",
      scope: true,
      bindToController: {
         deviceId: '='
      },
      controllerAs: 'ctrl',
      templateUrl: ':::PLUGIN_PATH:::/directives/operations/form/opForm.html',
      controller: DirectiveCtrl
   }
});
