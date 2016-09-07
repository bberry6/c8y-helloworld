//Main module name must be defined in ngModules of the plugin manifest
var deps = ['c8yViewsProvider'];
function moduleFn(c8yViewsProvider) {
  'use strict';

  c8yViewsProvider.when('/device/:deviceId', {
        name: 'BackChannel',
        icon: 'envelope-o',
        priority: 1000,
        templateUrl: ':::PLUGIN_PATH:::/views/index.html',
        controller: 'backChannelCtrl'
    });

}

angular.module('myapp.backchannel', []).config(deps.concat(moduleFn));
