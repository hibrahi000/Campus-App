const { getAllCampuses } = require('../api/campusDB');
const { getStudentById } = require('../api/studentDB');

exports.campusPage_load = (req, res, next) => {
	console.log('Loading Login Page');
	res.send({ express: 'YOUR CAMPUS PAGE' });
	// next();
};
exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })
	res.send({ express: 'EL TOTO' });
};
