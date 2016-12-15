console.log("future routes loading...");

var friends = require('../controllers/friends.js');

module.exports = function(app) {
	app.get('/friends', friends.index);
  app.get('/friends/:id/edit', friends.edit);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id/delete', friends.delete);
}
