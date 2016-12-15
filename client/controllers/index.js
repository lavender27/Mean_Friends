myApp.controller('IndexController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {

    $scope.friends = []
    var index = function() {
        friendsFactory.index(function(data) {
            $scope.friends = data;
            console.log('Friends controller data');
            console.log(data);
        });
    };
    index();

    $scope.deleteFriend = function(id){
    console.log("I am at IndexController" +" "+id)
        friendsFactory.delete(id, function (data) {
            $scope.friends = data;
             //pass in some parameter after function to get it validated
             index()
        });
    };
}]);
