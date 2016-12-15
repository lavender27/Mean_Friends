//***************************************************
//                      Requires                   **
//***************************************************
var bodyParser = require('body-parser'),
    express    = require('express'),
    path       = require('path'),
    app        = express();

//***************************************************
//           App.use (Body Parser, Static)         **
//***************************************************
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./bower_components")));

//***************************************************
//                    Mongoose                     **
//***************************************************
require(path.join(__dirname, './server/config/mongoose.js'));

//***************************************************
//                     Routes                      **
//***************************************************
require(path.join(__dirname, './server/config/routes.js'))(app)

//***************************************************
//                 Listen to port                  **
//***************************************************
app.listen(8000, function() {
  console.log('Listening to MEAN Friends on port 8000');
})
