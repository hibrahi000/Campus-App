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
		return await axios.get('/Student').then((data) => {
			console.log(data.data, 'this is the data');
			return data.data;
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
					// Render the newly fetched data inside of this.state.data
					<p>{this.state.data}</p>
				</header>
			</div>
		);
	}
}

export default App;
