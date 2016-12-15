//***************************************************
//                Require Mongoose                 **
//***************************************************
var mongoose = require('mongoose');

//***************************************************
//            Create Schema for Friend             **
//***************************************************
var FriendSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  birthDate: { type: Date, required: true}
}, {timestamps: true })

//***************************************************
//  Store the Schema under the name 'Friend'       **
//***************************************************
var Friend = mongoose.model('Friend', FriendSchema);
