(function(){
   'use strict';
   function DirectiveCtrl($scope, c8yDeviceControl){
      $scope.statuses = c8yDeviceControl.status;
   }
   DirectiveCtrl.$inject = ["$scope", 'c8yDeviceControl'];

   angular.module('myapp.backchannel').directive('stwOperation', function() {
      return {
         restrict: "AE",
         scope: {
            op: '='
         },
         templateUrl: ':::PLUGIN_PATH:::/directives/operations/operation/op.html',
         controller: DirectiveCtrl
      }
   });
})(angular);
