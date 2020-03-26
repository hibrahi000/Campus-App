const express = require('express');
const router = express.Router();
const { campusPage_load, test_load, addCampus,deleteCampus } = require('../middleware/campusMiddleware');
const urlencoded = express.urlencoded({extended: true});

router.get('/', campusPage_load);

router.post('/Add_Campus',urlencoded, addCampus)

router.delete('/', deleteCampus)

module.exports = router;