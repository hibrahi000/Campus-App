const Sequelize = require('sequelize');
const postgresKey = process.env.posgresPass;
module.exports = new Sequelize('postgres', 'hashmatibrahimi', postgresPass, {
	host: 'localhost',
	dialect: 'postgres',
	operatorsAlias: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 3000,
		idle: 1000
	}
});
