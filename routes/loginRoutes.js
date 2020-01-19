const express = require('express');
const router = express.Router();
const { login_load, test_load } = require('../middleware/loginMiddleware');

router.get('/', test_load)
router.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

module.exports = router;