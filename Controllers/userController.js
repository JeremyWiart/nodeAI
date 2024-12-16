const loginView = require('../Views/loginView');
const db = require('../Bdd/db');
const crypto = require('crypto')
const shasum = crypto.createHash('sha1')


function showLogin(req,res){
    res.send(loginView());
}

function formLogin(req,res){

}

module.exports =   {showLogin,formLogin};