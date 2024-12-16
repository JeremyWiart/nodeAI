const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Remplacez par votre utilisateur MySQL
    password: '', // Remplacez par votre mot de passe MySQL
    database: 'user',
  });
  
  // Connexion à la base de données
  db.connect(err => {
    if (err) {
      console.error('Error db:', err);
      process.exit(1);
    }
    console.log(`Db 'user' Mysql connected with success.`);
  });

  module.exports = db;