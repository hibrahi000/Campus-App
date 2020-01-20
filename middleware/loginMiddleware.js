const { getAllCampuses } = require('../api/campusDB');
const { getStudentById } = require('../api/studentDB');

exports.login_load = (req, res, next) => {
	console.log('Loading Login Page');
	// res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
	next();
};
exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })
	res.send({express: 'This is the dummy data'});
};
