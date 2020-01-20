const { getAllCampuses } = require('../api/campusDB');
const { getStudentById } = require('../api/studentDB');

exports.studentPage_load = (req, res, next) => {
	console.log('Loading Login Page');
	res.send({ express: 'YOUR STUDENT PAGE' });
	// next();
};
exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })

};
