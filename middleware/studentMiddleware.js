const { getAllCampuses } = require('../api/campusDB');
const { getStudentById, getAllStudents, popStudent , addStudent} = require('../api/studentDB');

exports.studentPage_load = (req, res, next) => {
	getAllStudents().then((studentList) => {
		getAllCampuses().then((campusList) => {
			// console.log(campusList);
			res.send({ studentData: studentList, campusData: campusList });
		});
	});
};

exports.deleteStudent = (req, res, next) => {
	let { studentId } = req.query;
	console.log(studentId);
	popStudent(studentId).then(() => {
		res.send({ status: 'OK' });
	});
};
exports.redirectStudent = (req, res, next) => {
	res.redirect('http://localhost:3000/Students');
};
exports.addStudent = (req, res, next) => {
	let { firstname, lastname, gender, email, campus } = req.body;
	console.log('this is me',req.body);
	addStudent(firstname,lastname,gender,email,null,campus).then(res.redirect('/'));
};

exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })
};
