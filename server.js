require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const loginRoutes = require('./routes/loginRoutes');
const campusRoutes = require('./routes/campusRoutes');
const studentRoutes = require('./routes/studentsRoutes');
const bodyParser = require('body-parser');

const campusAPI = require('./api/campusDB');
const studentAPI = require('./api/studentDB');

// ___Mounting the route at the / path
app.use('/login', loginRoutes);
app.use('/Campus', campusRoutes);
app.use('/Student', studentRoutes);

// ____Body-Parser for express 4
app.use(bodyParser.urlencoded({ extended: false }));
// studentAPI.popStudent();
// campusAPI.addCampus('TestUniversity','TestLocation').then(campusAPI.getAllCampuses().then(data => console.log(data)));
// campusAPI.getAllCampuses().then(data => console.log(data));
// campusAPI.removeCampus(1);
studentAPI.getStudentById(1).then(data => console.log(data));


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
