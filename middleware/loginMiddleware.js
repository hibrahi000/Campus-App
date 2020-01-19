const {getAllCampuses} = require('../api/campusDB');




exports.login_load = (req, res, next) => {
	console.log('Loading Login Page');
	// res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
	next();
};
exports.test_load = (req, res, next) => {
	getAllCampuses().then(data => {
		res.send({express : data});
	})
};
