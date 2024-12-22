const accountView = require("../Views/accountView");
const User = require('../Models/userModels');
const crypto = require('crypto');
const db = require('../Bdd/db');

function showAccount(req,res){
    const errorChangePwd = false;
    res.send(accountView(req.username,errorChangePwd));
}


function formChangePassword(req,res){
    const {oldPassword, newPassword,rpNewPassword } = req.body;
    const shasum1 = crypto.createHash('sha1')
    const shasum2 = crypto.createHash('sha1')
    const shasum3 = crypto.createHash('sha1')
    shasum1.update(oldPassword);
    shasum2.update(newPassword);
    shasum3.update(rpNewPassword);
    const password = shasum1.digest('hex');
    const hashPassword = shasum2.digest('hex');
    const hashNewPassword = shasum3.digest('hex');
    
   
        if(hashPassword == hashNewPassword){

        const query = `SELECT * FROM user WHERE username = ? AND password = ?`;
        db.query(query,  [req.username.username, password],  (err, row) => {
            if (err) {
            console.error('Request error', err);
            res.status(500).send('Server error');
            return;
            } 
            if (row.length > 0) {
                const errorChangePwd = false;
                //console.log(token); 
                res.send('ok');
                //res.send(accountView(req,errorChangePwd));
                 console.log(password);
                console.log(req.username.username);
            }else {
               
                const errorChangePwd = true;
                //res.send(accountView(req.username,errorChangePwd));
                res.send('erreur oldpassword');
                
            }

            }); 
        
        }else{
            const errorChangePwd = true;
            res.send(accountView(req.username,errorChangePwd));
        }
    
}

module.exports = {showAccount,formChangePassword};