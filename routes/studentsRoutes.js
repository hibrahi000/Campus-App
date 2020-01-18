const express = require('express');
const router = express.Router();
const { login_load } = require('../middleware/loginMiddleware');

router.get('/', login_load);


module.exports = router;