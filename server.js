require('dotenv').config();
const express = require('express');
const app = express();
const loginRoutes = require('./routes/loginRoutes');
const campusRoutes = require('./routes/campusRoutes');
const studentRoutes = require('./routes/studentsRoutes');
const bodyParser = require('body-parser');
app.listen(4000, () => console.log(`Listening on port 4000`));

const campusAPI = require('./api/campusDB');
const studentAPI = require('./api/studentDB');

// ___Mounting the route at the / path
app.use('/', loginRoutes);
app.use('/Campus', campusRoutes);
app.use('/Student', studentRoutes);

// ____Body-Parser for express 4
app.use(bodyParser.urlencoded({ extended: false }));


// campusAPI.getAllCampuses().then(data => console.log(data));
studentAPI.getStudentById('Brooklyn College',1).then(student => console.log(student));


// *
// !
// ?
// TODO
// ++
// --error removed
// :: warning
// ^^ this up here
// ;; This is closing
// TADA Finished
