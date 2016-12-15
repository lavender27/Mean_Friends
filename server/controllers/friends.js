console.log('friends controllers');

//***************************************************
//                Require Mongoose                 **
//***************************************************
var mongoose = require('mongoose');

var Friend = mongoose.model('Friend');

// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController() {
    this.index = function(req, res) {
        Friend.find({}, function(err, friends) {
            if (err) {
                console.log('Could not get friends from db')
            } else {
                console.log('Successfully retrieved friends from db')
                res.json(friends)
            }
        })
    };

    this.edit = function(req, res) {
      Friend.findOne({ __id: req.params.id}, function(err, friend) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          console.log('FRIEND:', friend);
          res.json(friend);
        }
      })
    };

    this.create = function(req, res) {
      console.log('server - reached create controller')
      console.log('REQ BODY:', req.body);
      var friend = new Friend({ firstName: req.body.firstName, lastName: req.body.lastName, birthDate: req.body.birthDate });
      friend.save(function(err) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          console.log('FRIEND:', friend);
          res.json(friend)
        }
      })
    };

    this.update = function(req, res) {
      console.log('server - update friend id: ' + req.params.id);
      Friend.findOne({ __id: req.params.id} , function(err, friend) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          friend.firstName = req.body.firstName;
          friend.lastName = req.body.lastName;
          friend.birthDate = req.body.birthDate;
          friend.save(function(err) {
            if (err) {
              console.log('error updating friend');
            } else {
              res.json(friend);
            }
          })
        }
      })
    };

    this.delete = function(req, res) {
      console.log('REQ.PARAMS: ', req.params);
      Friend.remove({ __id: req.parmas.id}, function(err, friend) {
        if (err) {
          console.log('error delete a Friend from db');
          res.json(err);

        } else {
          console.log('Successfully deleted a Friend from db');
          res.json({ message: 'Friend ID: ' + req.parms.id + 'Successfully delete from db'});
        }
      })
    };

    this.show = function(req, res) {
      console.log('Found friend');
      Friend.findOne({ __id: req.params.id}, 'firstName lastName birthDate', function(err, friend) {
        if(err) {
          console.log('error getting Friend from db');
        } else {
            console.log('Successfully retrieved Friend from db');
            res.json(friend);
        }
      })
    }

}

module.exports = new FriendsController();
