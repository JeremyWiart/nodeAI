const loginView = require('../Views/loginView');
const registerView = require('../Views/registerView');
const verifyToken = require('../Middleware/authMiddle');
const User = require('../Models/userModels');
const db = require('../Bdd/db');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');


function showLogin(req,res){
    res.send(loginView());
}

function showRegister(req,res){
    res.send(registerView());
}

function formLogin(req,res){
    
    const { username, password } = req.body;
    const shasum = crypto.createHash('sha1')
    shasum.update(password);
    const hashPassword = shasum.digest('hex');
    const user = new User( username, hashPassword );

    const query = `SELECT * FROM user WHERE username = ? AND password = ?`;

    db.query(query, [user.username, user.hashPassword],  (err, row) => {
        if (err) {
          console.error('Request error', err);
          res.status(500).send('Server error');
          console.log(user.hashPassword);
          
          return;
        } 
        if (row.length > 0) {
            const token = jwt.sign({ username: user.username }, '2sd78AN2s6oP98T120a0az017', { expiresIn: '30min',});
            res.cookie('token', token, { httpOnly: true });
            console.log(token); 
            res.redirect('/Home');
            res.end();
          }else {
            res.send('Wrong password or username.');
          }

        });
}
module.exports =   {showLogin,showRegister,formLogin};