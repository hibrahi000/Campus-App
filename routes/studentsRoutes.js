const express = require('express');
const router = express.Router();
const urlencoded = express.urlencoded({extended: true});
const { studentPage_load, deleteStudent, redirectStudent, addStudent } = require('../middleware/studentMiddleware');
router.get('/', studentPage_load);

router.delete('/', deleteStudent);

router.post('/Add_Student',urlencoded, addStudent);



module.exports = router;