var dependencies = ['$scope', '$routeParams', 'c8yDevices'];
var backChannelController = function($scope, $routeParams, c8yDevices) {
  'use strict';

   $scope.hello = 'Hello cruel world!';
   c8yDevices.list().then(function(devs){
      console.log('device list: ', devs);
   });

};

angular.module('myapp.helloworld').controller('helloCtrl', dependencies.concat(backChannelController));
