const jwt = require('jsonwebtoken');

const config = require(`${__dirname}/../config`);

const checkAuth = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  const msg = 'Unauthorized: Missing or invalid auth token.';
  
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, config.JWT_SECRET_KEY, (err) => {
      if (err) {
        res.status(401).json({ error: msg });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ error: msg });
  }
};

module.exports = checkAuth;
