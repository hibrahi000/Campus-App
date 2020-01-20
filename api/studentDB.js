const db = require('../config/database');
const op = require('sequelize');
const student = require('../models/student');
const campus = require('../models/campus');
const campusApi = require('../api/campusDB');
exports.dbConnectionAuth = () => {
	db
		.authenticate()
		.then(function(err) {
			console.log('Connection has been established successfully.');

			// campus.findAll().then((data) => console.log(data,'this is printing'));
		})
		.catch(function(err) {
			console.log('Unable to connect to the database:', err);
		});
};

exports.getAllStudents = async () => {
	return await student.findAll().then((students) => students).catch((err) => {
		console.log('Error finding students', err);
	});
};

exports.getStudentById = async (query) => {
	// console.log(query);
	return await student
		.findOne({
			where: { id: query }
		})
		.then((student) => student.dataValues)
		.catch((err) => console.log('Err student could not be found', err));
};
exports.getStudentByIdArray = async (queryArry, studentArray) => {
	// console.log(query);
	return studentArray
		.push(
			await student
				.findAll({
					where: { id: queryArry[queryArry.length - 1] }
				})
				.then((student) => {
					if (queryArry.length !== 0) {
						queryArry.pop();
						this.getStudentByIdArray(queryArry, studentArray);
					} else {
						return student;
					}
				})
		)
		.catch((err) => console.log('Err student could not be found', err));
};
exports.getStudentByFirstName = async (query) => {
	return await campus
		.findAll({ where: { university: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
exports.getStudentByLastName = async (query) => {
	return await campus
		.findAll({ where: { location: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
//+++ Gender query needs further thought
// exports.getStudentByGender = async(gender) => {
// 	return await campus.findAll({where: {number_of_students : query}}).then(data => data).catch((err) => console.log('error in query'));

// }
exports.getStudentByEmail = async (query) => {
	return await campus
		.findAll({ where: { email: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};

exports.getStudentByDOB = async (query) => {
	return await campus
		.findAll({ where: { date_of_birth: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};

exports.getStudentsByCampusID = async (query) => {
	return await campus
		.findAll({ where: { campus_id: 1 } })
		.then((data) => console.log(data))
		.catch((err) => console.log('error in query'));
};

exports.addStudent = async (firstName, lastName, gender, email, dob, campusId) => {
	const studentObj = {
		first_name: firstName,
		last_name: lastName,
		gender: gender,
		email: email,
		date_of_birth: dob,
		campus_id: campusId
	};
	student
		.create(studentObj)
		.then((newStudent) => {
			console.log(
				`Successfully Created new student`,
				`Student ID: ${newStudent.id} <----> Campus ID: ${newStudent.campus_id}`
			);
			campusApi
				.addStudent(newStudent.campus_id)
				.then((campusObj) =>
					console.log(
						`Campus has been update it now has a value of Number Of Students = ${campusObj.number_of_students} `
					)
				);
		})
		.catch((err) => console.log('Err Campus could not be made', err));
};

exports.popStudent = async (studentId) => {
	studentId = `${studentId}`;
	this.getAllStudents()
		.then((studentList) => {
			let studentIndex = studentList.findIndex((studentObj) => {
				console.log(`
					${studentObj.dataValues.id}
					${studentId}
					${typeof studentObj.dataValues.id === typeof studentId}
					`);
				return studentObj.dataValues.id === studentId;
			});
			console.log(studentList[0]);
			let campusID = studentList[studentIndex].dataValues.campus_id;
			studentList.splice(studentIndex, 1);
			console.log(studentList[0]);
			console.log(campusID);
			campusApi
				.popStudent(campusID)
				.then(() => studentIndex[0].destroy())
				.catch((err) => console.log('Error student and campus was not updated', err));
		})
		.catch((err) => console.log('couldnt pop student'));
};
