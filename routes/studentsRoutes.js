const express = require('express');
const router = express.Router();
const { studentPage_load } = require('../middleware/studentMiddleware');

router.get('/', studentPage_load);


module.exports = router;