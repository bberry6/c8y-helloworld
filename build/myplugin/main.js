var deps=["c8yNavigatorProvider","c8yViewsProvider","c8yDeviceGroup"],moduleFn=function(a,b,c){"use strict";c.list().then(function(a){console.log("group list: ",a)}),a.addNavigation({name:"New plugin",icon:"cube",priority:1e5,path:"hello"}),b.when("/hello",{templateUrl:"/apps/byb/myplugin/views/index.html",controller:"backChannelCtrl"})};angular.module("myapp.backchannel",["c8yManagedObject"]).config(deps.concat(moduleFn));var dependencies=["$scope","$routeParams","c8yDevices"],backChannelController=function(a,b,c){"use strict";a.hello="Hello cruel world!",a.sendCmd=function(){console.log("device id: ",b.deviceId),b.deviceId&&c.detail(b.deviceId).then(function(a){console.log("device  data: ",a)})},c.list().then(function(a){console.log("device list: ",a)})};angular.module("myapp.backchannel").controller("backChannelCtrl",dependencies.concat(backChannelController)),angular.module("myapp.backchannel").run(["$templateCache",function(a){"use strict";a.put("/apps/byb/myplugin/views/index.html",'<h1>{{hello}}</h1><button class="btn btn-default" ng-click=sendCmd()>send command</button>')}]);