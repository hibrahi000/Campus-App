import React, { Component } from 'react';

import classes from './Students.module.css';
import Student from './Student/Student';
import AddStudentForm from '../Navigation/Forms/AddStudentForm';
import EditStudentForm from '../Navigation/Forms/EditStudentForm';
import Aux from '../../hoc/Aux';
const axios = require('axios');

class Students extends Component {
	state = {
    students: [],
    campuses: [],
		defaultImg: 'http://www.brooklyn.cuny.edu/web/com_campus_exteriors/111121_CampusExterior_738x330_002.jpg',
		nameForm: '',
		studentsIdForm: '',
		campusForm: '',
		imageSForm: '',
		id: 'the id from database',
		addMyForm: false
	};

	componentDidMount() {
		// Call our axios function below once the component mounts
		this.callBackendAPI()
			.then((res) => {
        this.setState({ students: res.studentData, campuses: res.campusData });
			})
			.catch((err) => console.log(err));
	}

	callBackendAPI = async () => {
		//this is a axios call that calls to the proxy with the url /login_backend that goes to express routes
		return await axios.get('/Student').then((data) => {
			// console.log(data.data.studentData, 'this is the data');
			return data.data;
		});
  };
  

  getCampus = (campusId) => {
    let campusIndex =  this.state.campuses.findIndex(elem => {
      return elem.id === campusId;
    })
    return this.state.campuses[campusIndex];
  }

	campFun = (ID) => {
		// this.setState({ showCampus: <CampusPage /> });
		console.log('im here to show the campus ' + this.state.location);

		return (window.location = `/students/student${ID}`);
	};

	//// Start to save the values from the form

	formChangeHandler = (e) => {
		console.log(e.target.name);
		// this.nameForm = e.target.value;
		this.setState({ [e.target.name]: e.target.value });
	};

	// End of the values save from the form

	formAddStudentsHandler = (e) => {
		console.log('Im Clicked ');
		this.setState({ addMyForm: true });
	};


	addStudentHandler = (event) => {
		// event.preventDefault();
		// axios
		// 	.post('/Student/Add_Student')
		// 	.this.callBackendAPI()
		// 	.then((res) => {
    //     // this.setState({ students: res.studentData });
    //     // console.log(res);
		// 	})
		// 	.catch((err) => console.log(err));
		// this.setState({ addMyForm: false });
	};

	editStudentHandler = (event) => {
		event.preventDefault();
		console.log('Editing a new Uni ');

		// console.log(this.state.idForm);

		const studentss = [ ...this.state.students ];
		studentss.splice(this.state.idForm, 1);
		studentss.push(this.state);
		this.setState({ students: studentss });
		// // show the element
		this.setState({ editMyForm: false });
	};

	editStudentsHandler = (indexID) => {
		console.log('Edit uni ' + indexID);

		this.setState({ idForm: indexID });
		this.setState({ editMyForm: true });
	};

	// :: make this more dynamic utilizing all of react
	deleteStudentsHandler = (studentId) => {
		console.log('Deleting uni ' + studentId);
		axios.delete(`/Student?studentId=${studentId}`).then(() => {
			this.callBackendAPI()
				.then((res) => {
					this.setState({ students: res.studentData });
				})
				.catch((err) => console.log(err));
		});
	};

	render() {
		let { firstname, lastname, dateofbirth, email, gender, campus, image } = this.state;
		let { addMyForm, editMyForm } = this.state;
		let showContent = null;

		if (addMyForm) {
			showContent = (
				<AddStudentForm
					title="New Student Form * = REQUIRED"
					firstnameName=" *Student First Name:"
					lastnameName="*Student Last Name:"
					emailName="*Student Email"
					genderName="*Student Gender"
					campusName="*Student Campus"
          collegeArray = {this.state.campuses}
					// values
					firstname={firstname}
					lastname={lastname}
					dob={dateofbirth}
					email={email}
					gender={gender}
					campus={campus}
					imageSrc={image}
					submitFunction={this.addStudentHandler}
					// change={this.formChangeHandler}
				/>
			);
		} else if (editMyForm) {
			showContent = (
				<EditStudentForm
					title="Edit Student Form"
					firstnameName="Student FirstName:"
					lastnameName="Student LastName:"
					dobName="Student Date Of Birth"
					emailName="Student Email"
					genderName="Student Gender"
					campusName="Student Campus"
					imageSrcName="Student Profile Image Source:"
					// values
					firstname={firstname}
					lastname={lastname}
					dob={dateofbirth}
					email={email}
					gender={gender}
					campus={campus}
					imageSrc={image}
					summit={this.editStudentHandler}
					change={this.formChangeHandler}
				/>
			);
		} else {
			// When the length of Students is zero (Empty)
			if (this.state.students.length === 0) {
				showContent = (
					<div className={classes.BG}>
						<h1>All Student</h1>
						<button onClick={this.formAddStudentsHandler}>Add Student</button>
						<p>There are any student registered in the database</p>
					</div>
				);
			} else {
				// Show the campus card
				showContent = (
					<Aux>
						<div className={classes.BG}>
							<h1>All Students</h1>
							<button onClick={this.formAddStudentsHandler}>Add Student</button>
						</div>

						<div className={classes.Box}>
							{this.state.students.map((student, index) => {
								return (
									<Student
										key={index}
										id={student.id}
										campusPageClick={this.campFun}
										title={`${student.first_name} ${student.last_name}`}
										studentsCount={student.id}
										campusName={this.getCampus(student.campus_id).university}
										image={[ this.state.defaultImg ]}
										edit={() => this.editStudentsHandler(student.id)}
										delete={() => this.deleteStudentsHandler(student.id)}
									/>
								);
							})}
						</div>
						{this.showContent1}
					</Aux>
				);
			}
		}

		return <div className={classes.Students}>{showContent}</div>;
	}
}

export default Students;
