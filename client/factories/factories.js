console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http', function($http) {
    // constructor for our factory
    var friends = [];
    var friend = [];

    function FriendsFactory() {
        var _this = this;
        this.create = function(newfriend, callback) {
            $http.post('/friends', newfriend).then(function(returned_data) {
                if (typeof(callback) == 'function') {
                    callback(returned_data.data);
                }
            });
        };

        this.update = function(friendId, friend, callback) {
            var url = '/friends/' + friendId;
            console.log('lets update', friend);
            $http.post(url, friend).then(function(returned_data) {
                callback(returned_data.data);
            })

        };

        this.index = function(callback) {
            //call this method if you want to update or set the friends variable
            $http.get('/friends').then(function(returned_data) {
                    console.log(returned_data.data);
                    friends = returned_data.data;
                    callback(friends);
                })
                //Note: this can be shortened to $http.get('/friends').then(callback);
                //But only if you only want to run the callback from the controller.
        };

        this.delete = function(id, callback) {
            console.log('sending id to backend from factory' +" "+ id);
            var url = '/friends/' + id + '/delete';
            $http.get(url).then(function(returned_data) {
                callback(returned_data.data);
            });
        };

        this.show = function(friendId, callback) {
            console.log('sending ID', friendId);
            var url = '/friends/' + friendId
            $http.get(url).then(function(returned_data) {
                callback(returned_data.data);
            });
        }

        // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
        // this.getFriends = function(callback) {
        //     callback(friends);
        // };
        this.getFriend = function(id, callback) {
            var url = '/friends/' + id + '/edit'
            $http.get(url).then(function(returned_data) {
                callback(returned_data.data)
            })
        };
    }
    console.log(new FriendsFactory());
    return new FriendsFactory();
}]);
