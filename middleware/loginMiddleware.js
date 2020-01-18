exports.login_load = (req, res, next) => {
	console.log('Loading Login Page');
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
};
