const db = require('../config/database');
const Sequelize = require('sequelize');
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


exports.getStudentById = async (campusName,query) => {
	console.log(query);
	return await campus.findOne({where: {university : campusName}}).then(campus => {
        const campusId =  campus.dataValues.id;
        console.log(campus.id);
        //+++++++ WORK ON THIS PORTION NEXT ++++++++++ WE NEED TO FIGURE OUT MULTIPLE WHERE STATEMENTS 
        student.findAll({where : {[Sequelize.and] : [{campus_id: campusId},{id: query}]}}).then((student => console.log(student))).catch(err => console.log('Err student could not be found',err));
    }).catch((err) => console.log('Err campus where student is cant be found',err));
}
exports.getStudentByFirstName = async(query) => {
	return await campus.findAll({where: {university : query}}).then(data => data).catch((err) => console.log('error in query'));
}
exports.getStudentByLastName = async(query) => {
	return await campus.findAll({where: {location : query}}).then(data => data).catch((err) => console.log('error in query'));
}
//+++ Gender query needs further thought 
// exports.getStudentByGender = async(gender) => {
// 	return await campus.findAll({where: {number_of_students : query}}).then(data => data).catch((err) => console.log('error in query'));

// }
exports.getStudentByEmail = async(query) => {
	return await campus.findAll({where: {email : query}}).then(data => data).catch((err) => console.log('error in query'));

}

exports.getStudentByDOB = async(query) => {
	return await campus.findAll({where: {date_of_birth: query}}).then(data => data).catch((err) => console.log('error in query'));

}

exports.getStudentCampusID = async(query) => {
	return await campus.findAll({where: {campus_id : query}}).then(data => data).catch((err) => console.log('error in query'));

}