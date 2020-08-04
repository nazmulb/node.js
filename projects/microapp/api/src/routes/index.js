var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.json({ message: 'Welcome' });
});

/* GET health check. */
router.get('/healthz', (req, res) => {
  res.json({
    uptime: process.uptime(),
  });
});

module.exports = router;
