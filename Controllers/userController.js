const loginView = require('../Views/loginView');
const registerView = require('../Views/registerView');
const User = require('../Models/userModels');
const db = require('../Bdd/db');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');


function showLogin(req,res){
    const errorLog = false;
    res.send(loginView(errorLog));
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
          return;
        } 
        if (row.length > 0) {
            const token = jwt.sign({ username: user.username }, '2sd78AN2s6oP98T120a0az017', { expiresIn: '30min',});
            res.cookie('token', token, {
              httpOnly: true, 
              sameSite: 'strict',
              path: '/'
          });
            //console.log(token); 
            res.redirect(301,'/Home');
           
          }else {
            const errorLog = true;
            res.send(loginView(errorLog));
            
          }

        }); 
}

function logout(req,res){

  res.clearCookie('token', req.cookies.token,{
    httpOnly: true, 
    sameSite: 'strict',
    path: '/'
    });
  res.redirect('/');
  res.end();
}


module.exports =   {showLogin,showRegister,formLogin,logout};