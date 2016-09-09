//Main module name must be defined in ngModules of the plugin manifest
var deps = ['c8yNavigatorProvider', 'c8yViewsProvider'];
var moduleFn = function(c8yNavigatorProvider, c8yViewsProvider) {
  'use strict';

  c8yNavigatorProvider.addNavigation({
    name: 'New plugin',
    icon: 'cube',
    priority: 100000,
    path: 'hello'
  });

  c8yViewsProvider.when('/hello', {
    // Please use this string placeholder where you want to refer you plugin path.
    templateUrl: ':::PLUGIN_PATH:::/views/index.html',
    controller: 'helloCtrl'
  });

}
angular.module('myapp.helloworld', []).config(deps.concat(moduleFn));


/*
c8yViewsProvider.when('/device/:deviceId', {
   name: 'BackChannel',
   icon: 'envelope-o',
   priority: 1000,
   templateUrl: ':::PLUGIN_PATH:::/views/index.html',
   controller: 'backChannelCtrl'
});
*/
