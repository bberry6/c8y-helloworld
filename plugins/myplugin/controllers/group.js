var deps = ['$scope', '$routeParams'];
var controllerFn = function($scope, $routeParams) {
  'use strict';
   $scope.hello = 'Hello cruel world!';
};

angular.module('myapp.backchannel').controller('groupCtrl', deps.concat(controllerFn));
