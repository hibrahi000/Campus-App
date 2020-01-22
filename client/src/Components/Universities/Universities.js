import React, { Component } from 'react';

import classes from './Universities.module.css';
import University from './University/University';
import AddForm from '../Navigation/Forms/AddForm';
import EditForm from '../Navigation/Forms/EditForm';
import Aux from '../../hoc/Aux';
const axios = require('axios');
const defaultImg = require('../../Images/3595257_0.jpg');
class Universities extends Component {
	state = {
		universities: [],
		titleForm: '',
		addressForm: '',
		imageSForm: '',
		desForm: '',
		idForm: 'the id from database',
		addMyForm: false,
		editMyForm: false,
		defaultImg: defaultImg
	};

	componentDidMount() {
		// Call our axios function below once the component mounts
		this.callBackendAPI()
			.then((res) => {
				this.setState({ universities: res.campusData });
			})
			.catch((err) => console.log(err));
	}

	callBackendAPI = async () => {
		//this is a axios call that calls to the proxy with the url /login_backend that goes to express routes
		return await axios.get('/Campus').then((data) => {
			// console.log(data.data.studentData, 'this is the data');
			return data.data;
		});
	};

	campFun = (e) => {
		// this.setState({ showCampus: <CampusPage /> });
		console.log('im here to show the campus ' + this.state.location);

		return (window.location = '/campus01');
	};

	//// Start to save the values from the form
	nameFormChangeHandler = (e) => {
		// console.log(e.target.value);
		this.titleForm = e.target.value;
		this.setState({ titleForm: e.target.value });
	};

	addressFormChangeHandler = (e) => {
		this.addressForm = e.target.value;
		this.setState({ addressForm: e.target.value });
	};

	imageSrcFormChangeHandler = (e) => {
		this.imageSForm = e.target.value;
		this.setState({ imageSForm: e.target.value });
	};

	desFormChangeHandler = (e) => {
		this.desForm = e.target.value;
		this.setState({ desForm: e.target.value });
	};

	// End of the values save from the form

	formAddCampusHandler = (e) => {
		console.log('Im Clicked ');
		this.setState({ addMyForm: true });
	};

	addUniversityHandler = (event) => {
		// event.preventDefault();
		// console.log('Adding a new Uni ' + event);
		// console.log(this.titleForm);
		// const universities = [ ...this.state.universities ];
		// universities.push({
		// 	title: this.titleForm,
		// 	studentsCount: 0,
		// 	address: this.addressForm,
		// 	image: this.imageSForm,
		// 	description: this.desForm,
		// 	id: ''
		// });
		// axios.post('/Campus/Add_Campus').then(() => {
		// })
		// this.setState({ addMyForm: false });
	};

	editUniversityHandler = (event) => {
		event.preventDefault();
		console.log('Editing a new Uni ');

		console.log(this.state.idForm);

		const universities = [ ...this.state.universities ];
		universities.splice(this.state.idForm, 1);
		universities.push({
			title: this.state.titleForm,
			studentsCount: 0,
			address: this.addressForm,
			image: this.imageSForm,
			description: this.desForm,
			id: this.state.idForm
		});
		this.setState({ universities: universities });
		// show the element
		this.setState({ editMyForm: false });
	};

	editUniversitiesHandler = (indexID) => {
		console.log('Edit uni ' + indexID);

		this.setState({ idForm: indexID });
		this.setState({ editMyForm: true });
	};
	deleteUniversityHandler = (campusId) => {
		console.log('Deleting uni ' + campusId);
		axios.delete(`/Campus?campusId=${campusId}`).then(() => {
			this.callBackendAPI()
				.then((res) => {
					this.setState({ universities: res.campusData });
				})
				.catch((err) => console.log(err));
		});
	};

	render() {
		let { addMyForm } = this.state;
		let { editMyForm } = this.state;

		let showContent = null;

		if (addMyForm) {
			showContent = (
				<AddForm
					title="New Campus Form"
					name="Campus Name:"
					address="Campus Address:"
					imageSrc="Campus Image Source:"
					description="Campus Descripion"
					summit={this.addUniversityHandler}
					nameChange={this.nameFormChangeHandler}
					addressChange={this.addressFormChangeHandler}
					imageSrcChange={this.imageSrcFormChangeHandler}
					desChange={this.desFormChangeHandler}
				/>
			);
		} else if (editMyForm) {
			showContent = (
				<EditForm
					title="Edit Campus Form"
					name="Campus Name:"
					address="Campus Address:"
					imageSrc="Campus Image Source:"
					description="Campus Descripion"
					summit={this.editUniversityHandler}
					nameChange={this.nameFormChangeHandler}
					addressChange={this.addressFormChangeHandler}
					imageSrcChange={this.imageSrcFormChangeHandler}
					desChange={this.desFormChangeHandler}
				/>
			);
		} else {
			// When the length of campus is zero (Empty)
			if (this.state.universities.length === 0) {
				showContent = (
					<div className={classes.BG}>
						<h1>All Campuses</h1>
						<button onClick={this.formAddCampusHandler}>Add Campus</button>
						<p>There are not campuses registered in the database</p>
					</div>
				);
			} else {
				// Show the campus card
				showContent = (
					<Aux>
						<div className={classes.BG}>
							<h1>All Campuses</h1>
							<button onClick={this.formAddCampusHandler}>Add Campus</button>
						</div>

						<div className={classes.Box}>
							{this.state.universities.map((university, index) => {
								return (
									<University
										key={index}
										id={university.id}
										campusPageClick={this.campFun}
										title={university.university}
										studentsCount={university.number_of_students}
										image={this.state.defaultImg}
										edit={() => this.editUniversitiesHandler(index)}
										delete={() => this.deleteUniversityHandler(university.id)}
									/>
								);
							})}
						</div>
						{this.showContent1}
					</Aux>
				);
			}
		}

		return <div className={classes.Universities}>{showContent}</div>;
	}
}

export default Universities;
