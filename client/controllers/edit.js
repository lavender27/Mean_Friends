myApp.controller('EditController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
    var vm = $scope;
    //$scope.sortType = 'name';
  //  $scope.sortReverse = false;
    console.log("current location:");
    console.log($location);


    var edit = function() {
        friendsFactory.getFriend($routeParams.id, function(data) {
            var date = new Date(data.birthDate);
            date.toLocaleDateString('en-US');
            data.birthDate = date;
            $scope.friend = data;
        });
    }
    edit();

    $scope.update = function() {
        friendsFactory.update($routeParams.id, $scope.friend, function(result) {
            $location.url('/');
        })
    }
}]);
