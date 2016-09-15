//Main module name must be defined in ngModules of the plugin manifest
var deps = ['c8yNavigatorProvider', 'c8yViewsProvider', 'c8yTabsProvider'];
var moduleFn = function(c8yNavigatorProvider, c8yViewsProvider, c8yTabsProvider) {
   'use strict';

   c8yViewsProvider.when('/mygroups/:groupId', {
      templateUrl: ':::PLUGIN_PATH:::/views/group.html',
      controller: 'groupCtrl'
   });

   c8yViewsProvider.when('/mygroups/device/:deviceId/back_channel', {
      templateUrl: ':::PLUGIN_PATH:::/views/device.html',
      controller: 'deviceCtrl'
   });

   c8yViewsProvider.when('/', {
      templateUrl: ':::PLUGIN_PATH:::/views/index.html',
      controller: 'indexCtrl'
   });

   c8yTabsProvider.addTab('/mygroups/device/:deviceId', {
     name: 'Back Channel',
     icon: 'arrow-circle-down',
     priority: 1000
   });

}
var mod = angular.module('myapp.backchannel', []).config(deps.concat(moduleFn));
mod.run(['c8yNavigator','c8yDeviceGroup', function(c8yNavigator, c8yDeviceGroup){

   c8yDeviceGroup.list().then(function(groups){

      groups.sort(function(a, b){
         var an = a.name.toLowerCase();
         var bn = b.name.toLowerCase();
         if(an > bn) return -1;
         if(an < bn) return 1;
         return 0;
      });

      var ct = 1000;
      var navs = groups.reduce(function(resultNavs, group, i){

         var groupNav = {
            parent: 'My groups',
            name: group.name,
            path: 'mygroups/' + group.id,
            icon: 'folder',
            priority: ct++
         };
         devNavs = group.childAssets.references.map(function(itm, i){
            return {
               parent: group.name,
               name: itm.managedObject.name,
               path: 'mygroups/device/' + itm.managedObject.id + '/back_channel',
               icon: 'car',
               priority: ct++
            };
         });
         return resultNavs.concat(groupNav, devNavs);
      },[]);

      var nodes = c8yNavigator.addNavigation(navs);
   });

}]);
