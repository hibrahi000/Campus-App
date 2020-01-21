import React, { Component } from 'react';
import './App.css';
const axios = require('axios');

class App extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		// Call our axios function below once the component mounts
		this.callBackendAPI()
			.then((res) => {
				res.campusData.forEach((elem) => {
					console.log(elem.university);
				});
				this.setState({ data: res.campusData });
			})
			.catch((err) => console.log(err));
	}
	callBackendAPI = async () => {
		//this is a axios call that calls to the proxy with the url /login_backend that goes to express routes
		return await axios.get('/Campus').then((data) => {
			console.log(data.data.campusData, 'this is the data');
			return data.data;
		});
	};

	render() {
		let data = JSON.stringify(this.state.data);

		let plist = this.state.data.map((campus) => (
			<div key={campus.id}>
				<h1>{campus.university}</h1>
				<p>{campus.id}</p>
				<p>{campus.location}</p>
				<p>{campus.number_of_students}</p>
			</div>
		));
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
					// Render the newly fetched data inside of this.state.data
					{plist}
				</header>
			</div>
		);
	}
}

export default App;
