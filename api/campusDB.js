const db = require('../config/database');
const campus = require('../models/campus');

exports.testDB = () => {
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

this.testDB();


exports.getAllCampuses = async() => {
	return await campus.findAll().then(data => data);
}
exports.getCampusById = async (query) => {
	console.log(query);
	return await campus.findAll({where: {id : query}}).then(data => data).catch((err) => console.log('error in query'));
}
exports.getCampusByUniversity = async(query) => {
	return await campus.findAll({where: {university : query}}).then(data => data).catch((err) => console.log('error in query'));
}
exports.getCampusByLocation = async(query) => {
	return await campus.findAll({where: {location : query}}).then(data => data).catch((err) => console.log('error in query'));
}
exports.getCampusByNumberOfStudents = async(query) => {
	return await campus.findAll({where: {number_of_students : query}}).then(data => data).catch((err) => console.log('error in query'));

}