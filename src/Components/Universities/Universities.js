import React, { Component } from "react";

import classes from "./Universities.module.css";
import University from "./University/University";
import AddForm from "../Navigation/Forms/AddForm";
import Aux from "../../hoc/Aux";

class Universities extends Component {
  state = {
    universities: [
      {
        title: "Lehman College",
        studentsCount: "10,311",
        address: "250 Bedford Park Blvd W, The Bronx, NY 10468",
        image:
          "http://lehman.edu/news/images/Lehman-Profs-Delson-Locke-Make-National-News-This-Week-b.jpg",
        description:
          "Lehman College is a senior college of the City University of New York in the Bronx borough of New York City. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967.",
        id: "the id from database"
      }
    ],
    titleForm: "",
    addressForm: "",
    imageSForm: "",
    desForm: "",
    idForm: "the id from database",
    showCampus: false,
    addMyForm: false
  };

  campFun = e => {
    // this.setState({ showCampus: <CampusPage /> });
    console.log("im here to show the campus " + this.state.location);

    return window.location = "/campuses"

  };

  //// Start to save the values from the form
  nameFormChangeHandler = e => {
    // console.log(e.target.value);
    this.titleForm = e.target.value;
    this.setState({ titleForm: e.target.value });
  };

  addressFormChangeHandler = e => {
    this.addressForm = e.target.value;
    this.setState({ addressForm: e.target.value });
  };

  imageSrcFormChangeHandler = e => {
    this.imageSForm = e.target.value;
    this.setState({ imageSForm: e.target.value });
  };

  desFormChangeHandler = e => {
    this.desForm = e.target.value;
    this.setState({ desForm: e.target.value });
  };

  // End of the values save from the form

  formAddCampusHandler = e => {
    console.log("Im Clicked ");
    this.setState({ addMyForm: true });
  };

  addUniversityHandler = event => {
    event.preventDefault();
    console.log("Adding a new Uni " + event);

    console.log(this.titleForm);

    const universities = [...this.state.universities];
    universities.push({
      title: this.titleForm,
      studentsCount: 0,
      address: this.addressForm,
      image: this.imageSForm,
      description: this.desForm,
      id: ""
    });
    this.setState({ universities: universities });
    // show the element
    this.setState({ addMyForm: false });
  };

  editUniversityHandler = () => {
    console.log("Edit uni");

    
  };
  deleteUniversityHandler = universityIndex => {
    console.log("Deleting uni " + universityIndex);
    const universities = [...this.state.universities];
    universities.splice(universityIndex, 1);
    this.setState({ universities: universities });
  };

  render() {
    let { showCampus } = this.state;
    let { addMyForm } = this.state;

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
                    title={university.title}
                    studentsCount={university.studentsCount}
                    image={university.image}
                    edit={() => this.editUniversityHandler(index)}
                    delete={() => this.deleteUniversityHandler(index)}
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
