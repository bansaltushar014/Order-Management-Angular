//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/Hotel-Booking/'));

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+ '/Hotel-Booking/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
//np

// client id gmail api  284836768936-6t3acvf8b93vvor8kt3181q61qj9kkrs.apps.googleusercontent.com 
// client secret  hsuirdql4lytOCRXjBHjytxv 