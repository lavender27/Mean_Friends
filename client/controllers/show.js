myApp.controller('ShowController', ['$scope', 'friendsFactory', '$location','$routeParams', function($scope, friendsFactory, $location, $routeParams) {
/* Private Methods */
  $scope.friend = {};

  $scope.getFriend = function(){
      friendsFactory.show($routeParams.id, function(data){
        $scope.friend = data;
      })
  }

  $scope.getFriend();


}]);
