var dependencies = ['$scope', 'c8yDevices'];
var backChannelController = function($scope, c8yDevices) {
  'use strict';

   $scope.hello = 'Hello cruel world!';
   $scope.sendCmd = function(){
      /*
      console.log('device id: ', $routeParams.deviceId);
      if($routeParams.deviceId){
         c8yDevices.detail($routeParams.deviceId).then(function (res) {
            console.log('device  data: ', res);
         });
      }
      */
      /*
      var operation = {
         deviceId: $routeParams.deviceId,
         description: 'BYB Test Operation',
         c8y_command: {
            param1: 'paramValue'
         }
      };
      c8yDeviceControl.createWithNotifications(operation).then(function (operationPromises) {
         operationPromises.created.then(_.partial(c8yAlert.success, 'Operation ' + operation.description + ' has been created!'));
         operationPromises.completed.then(function (operationResult) {
         if (operationResult.status === c8yDeviceControl.status.SUCCESSFUL) {
            handleSuccess();
         } else if (operationResult.status === c8yDeviceControl.status.FAILED) {
            handleFailure();
         }
         });
      });
      */
   }

   c8yDevices.list().then(function(devs){
      console.log('device list: ', devs);
   });

};

angular.module('myapp.backchannel').controller('backChannelCtrl', dependencies.concat(backChannelController));
