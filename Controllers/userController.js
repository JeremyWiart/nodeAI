const loginView = require('../Views/loginView');
const registerView = require('../Views/registerView');
const db = require('../Bdd/db');
const crypto = require('crypto')
const shasum = crypto.createHash('sha1')


function showLogin(req,res){
    res.send(loginView());
}

function showRegister(req,res){
    res.send(registerView());
}

function formLogin(req,res){
    const { username, password } = req.body;
    const hashPassword = crypto.createHash('sha1').update(password).digest('hex');
    const query = `SELECT * FROM user WHERE username = ? AND password = ?`;

    db.query(query, [username, hashPassword],  (err, row) => {
        if (err) {
          console.error('Request error', err);
          res.status(500).send('Server error');
          return;
        } 
        
        if (row.length > 0) {
            res.send(`Connexion réussie, bienvenue ${username}!`);
          }else {
            res.send('Wrong password or username.');
          }

        });
}
module.exports =   {showLogin,showRegister,formLogin};