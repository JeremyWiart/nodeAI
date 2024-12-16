const showLanding = require('./Controllers/landingController');
const {showLogin,formLogin} = require('./Controllers/userController');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));




app.listen(3000, () => {
    console.log("Server open on port 3000");
});

app.get('/', showLanding);

app.get('/login',showLogin);
app.post('/login',formLogin);
