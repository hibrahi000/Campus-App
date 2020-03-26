const Sequelize = require('sequelize');
const postgresPass = process.env.posgresPass;
var opts = {
	define: {
		timestamps: false,
		paranoid: true,
		freezeTableName: true
	}
};

module.exports = new Sequelize(`postgres://hashmatibrahimi:${postgresPass}@localhost:5432/postgres`, opts);
