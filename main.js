const showLanding = require('./Controllers/landingController');
const showHome = require('./Controllers/homeController');
const {showAccount,formChangePassword} = require('./Controllers/accountController');
const {showLogin,showRegister,formLogin,logout} = require('./Controllers/userController');
const verifyToken = require('./Middleware/authMiddle');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const express = require('express');
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cookieParser());



app.listen(3000, () => {
    console.log("Server open on port 3000");
});

app.get('/', showLanding);

app.get('/home', verifyToken,showHome );

app.get('/Account',verifyToken,showAccount);
app.post('/Account', verifyToken,formChangePassword)

app.get('/Login',showLogin);
app.post('/Login',formLogin);

app.get('/Register',showRegister);

app.get('/Logout', logout );




