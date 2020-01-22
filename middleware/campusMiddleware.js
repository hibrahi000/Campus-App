const { getAllCampuses, addCampus,removeCampus } = require('../api/campusDB');
const { getStudentById } = require('../api/studentDB');

exports.campusPage_load = (req, res, next) => {
	console.log('Loading Login Page');
	getAllCampuses().then((data) => {
		res.send({ campusData: data });
	});
};

exports.addCampus = (req, res, next) => {
	console.log('Adding Campus');
	let { name, address } = req.body;
	addCampus(name, address).then(() => {
		res.redirect('/');
	});
};

exports.deleteCampus = (req, res, next) => {
	let { campusId } = req.query;
	console.log(campusId);
	removeCampus(campusId).then(() => {
		res.send({ status: 'OK' });
	});

};

exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })
	console.log('route achieved');
	next();
};
