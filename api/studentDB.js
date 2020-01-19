const db = require('../config/database');
const op = require('sequelize');
const student = require('../models/student');
const campus = require('../models/campus');

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

exports.getAllStudents = async (query) => {
	return await student.findAll().then((students) => student).catch((err) => {
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

exports.getStudentCampusID = async (query) => {
	return await campus
		.findAll({ where: { campus_id: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
