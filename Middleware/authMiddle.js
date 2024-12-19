const jwt = require('jsonwebtoken');
    function verifyToken(req, res, next) {
        const token =  req.cookies.token || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }

    jwt.verify(token, '2sd78AN2s6oP98T120a0az017', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }

        // Ajouter les informations de l'utilisateur décodé à la requête
        req.username = decoded;
        next();
    });



    }

module.exports = verifyToken;
