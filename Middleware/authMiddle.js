

    function verifyToken(req, res, next) {
        const token = req.header('Authorization') || req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Access denied' });
        try {
            const decoded = jwt.verify(token, '2sd78AN2s6oP98T120a0az017');
            req.user = decoded.username;
            next();
        } catch (error) {
            res.status(401).json({ error: 'Invalid token' });
        }
    };

module.exports = verifyToken;
