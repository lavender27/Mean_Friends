myApp.controller('NewController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location){
  var nc = this;
  $scope.friend = {};


  var index = function(){
    friendsFactory.index(function(returnedData){
      $scope.friends = returnedData;
      console.log($scope.friends);
    });
  };

  index();

  this.create = function() {
        console.log(nc);
        var newFriend = {
          firstName: nc.firstName,
          lastName: nc.lastName,
          birthDate: nc.birthDate
        }
        friendsFactory.create(newFriend, function (result) {
          console.log(result);
          $location.url('/');
        })
    }

}]);
