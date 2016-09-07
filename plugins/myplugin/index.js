//Main module name must be defined in ngModules of the plugin manifest
angular.module('myapp.backchannel', []).config(['c8yViewsProvider', 'c8yNavigator',
function (c8yViewsProvider, c8yNavigator) {
  'use strict';


  var navparts = c8yNavigator.getNavigator();
  console.log('navparts: ', navparts);

  c8yViewsProvider.when('/device/:deviceId', {
        name: 'BackChannel',
        icon: 'envelope-o',
        priority: 1000,
        templateUrl: ':::PLUGIN_PATH:::/views/index.html',
        controller: 'backChannelCtrl'
    });

}]);
