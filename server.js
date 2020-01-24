require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}`));


const homepageRoutes = require('./routes/homepageRoutes');
const campusRoutes = require('./routes/campusRoutes');
const studentRoutes = require('./routes/studentsRoutes');
const bodyParser = require('body-parser');

// ___Mounting the route at the / path
app.use('/Homepage', homepageRoutes);
app.use('/Campus', campusRoutes);
app.use('/Student', studentRoutes);

// ____Body-Parser for express 4
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

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
