//Main module name must be defined in ngModules of the plugin manifest
var deps = ['c8yNavigatorProvider', 'c8yViewsProvider', 'c8yDeviceGroup'];
var moduleFn = function(c8yNavigatorProvider, c8yViewsProvider, c8yDeviceGroup) {
  'use strict';

  console.log('5');

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
angular.module('myapp.backchannel', []).config(deps.concat(moduleFn));
