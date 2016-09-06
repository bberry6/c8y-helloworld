angular.module('myapp.backchannel').controller('backChannelCtrl', ['$scope', 'c8yDevices', function ($scope, c8yDevices) {
  'use strict';

   $scope.hello = 'Hello world!';
   $scope.sendCmd = function(){
      console.log('got send cmd');
   }

   c8yDevices.list().then(function(devs){
      console.log('device list: ', devs);
   });

}]);
