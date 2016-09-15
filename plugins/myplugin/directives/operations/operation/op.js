
function DirectiveCtrl($scope){

}

DirectiveCtrl.$inject = ["$scope"];

angular.module('myapp.backchannel').directive('stwOperation', function() {
   return {
      restrict: "AE",
      scope: true,
      bindToController: {
         op: '@'
      },
      controllerAs: 'ctrl',
      templateUrl: ':::PLUGIN_PATH:::/directives/operations/operation/op.html',
      controller: DirectiveCtrl
   }
});
