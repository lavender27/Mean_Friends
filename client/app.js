//  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);
   //  use the config method to set up routing:
   myApp.config(function ($routeProvider) {
   $routeProvider
   .when('/',{
       templateUrl: 'partials/index.html',
       controller: 'IndexController'
   })
   .when('/friends/new',{
       templateUrl: 'partials/new.html',
       controller: 'NewController'
   })
   .when('/friends/:id/edit',{
       templateUrl: 'partials/edit.html',
       controller: 'EditController'
   })
   .when('/friends/:id',{
       templateUrl: 'partials/show.html',
       controller: 'ShowController'
   })
   .when('/friends/:id/delete',{
       templateUrl: 'partials/index.html',
       controller: 'IndexController'
   })
   .otherwise({
     redirectTo: '/'
   });
});
