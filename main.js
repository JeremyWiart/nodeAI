const showHome = require('./Controllers/homeController');
const showLanding = require('./Controllers/landingController');
const {showLogin,showRegister,formLogin} = require('./Controllers/userController');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.listen(3000, () => {
    console.log("Server open on port 3000");
});

app.get('/', showLanding);

app.get('/login',showLogin);
app.post('/login',formLogin);

app.get('/register',showRegister);

app.get('/', showHome);


