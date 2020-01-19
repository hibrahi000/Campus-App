import React, { Component } from 'react';
import './App.css';
const axios = require('axios');

class App extends Component {
	state = {
		data: null
	};

	componentDidMount() {
		// Call our axios function below once the component mounts
		this.callBackendAPI().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
	}
	callBackendAPI = async () => {
		//this is a axios call that calls to the proxy with the url /login_backend that goes to express routes
		return await axios.get('/login').then((data) => data.data);
	};

	render() {
		let CollegeListObj = (
			<div>
				{this.state.data.forEach((campus) => (
					<div>
						<h1>Campus Name : {campus.dataValues.university}</h1>
						<p>Location: {campus.dataValues.location}</p>
						<p>Number Of Students : {campus.dataValues.number_of_students}</p>
						<p>Campus Id : {campus.dataValues.id};</p>
					</div>
				))}
			</div>
		);
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
					// Render the newly fetched data inside of this.state.data
					<CollegeListObj />
				</header>
			</div>
		);
	}
}

export default App;
