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
      console.error('Erreur de connexion à la base de données:', err);
      process.exit(1);
    }
    console.log('Connecté à la base de données MySQL.');
  });

  module.exports = db;