(function(){
   'use strict';
   var deps = ['$scope', '$routeParams'];
   var controllerFn = function($scope, $routeParams) {
      $scope.hello = 'Hello cruel world!';
   };

   angular.module('myapp.backchannel').controller('groupCtrl', deps.concat(controllerFn));
})(angular);
