//Main module name must be defined in ngModules of the plugin manifest
angular.module('myapp.backchannel', ['c8yManagedObject']).config(['c8yNavigatorProvider', 'c8yViewsProvider', 'c8yDeviceGroup', function(c8yNavigatorProvider, c8yViewsProvider, c8yDeviceGroup) {
   'use strict';

   c8yDeviceGroup.list().then(function(r){
      console.log('group list: ', r);
   });

   c8yNavigatorProvider.addNavigation({
      name: 'New plugin',
      icon: 'cube',
      priority: 100000,
      path: 'hello'
   });

   c8yViewsProvider.when('/hello', {
      // Please use this string placeholder where you want to refer you plugin path.
      templateUrl: ':::PLUGIN_PATH:::/views/index.html',
      controller: 'backChannelCtrl'
   });

}
]);


/*
c8yViewsProvider.when('/device/:deviceId', {
   name: 'BackChannel',
   icon: 'envelope-o',
   priority: 1000,
   templateUrl: ':::PLUGIN_PATH:::/views/index.html',
   controller: 'backChannelCtrl'
});
*/
