import React, { Component } from "react";

import classes from "./Universities.module.css";
import University from "./University/University";
import AddForm from "../Navigation/Forms/AddForm";
import Aux from "../../hoc/Aux";
import EditForm from "../Navigation/Forms/EditForm";
import CampusPage from "../Navigation/CampusPage/CampusPage";

class Universities extends Component {
  state = {
    universities: [
      {
        title: "Lehman College",
        studentsCount: "5",
        image: "",
        description: "",
        id: "the id from database"
      }
    ],
    titleForm: "",
    sCountForm: "",
    imageSForm: "",
    desForm: "",
    idForm: "the id from database",
    showCampus: null,
    addMyForm: false
  };

  campFun = e => {
    // this.setState({ showCampus: <CampusPage /> });

    console.log("im here to show the campus " + e.target.key);
  };

  nameFormChangeHandler = e => {
    console.log(e.target.value)
    this.titleForm = e.target.value
  };

  formAddCampusHandler = e => {
    console.log("Im Clicked ");
    this.setState({ addMyForm: true });
  };

  addUniversityHandler = event => {
    event.preventDefault();
    console.log("Adding a new Uni " + event);

    console.log(this.titleForm)

    const universities = [...this.state.universities];
    universities.push({
      title: (this.titleForm),
      studentsCount: "8",
      image: "",
      description: "lalalala"
    });
    this.setState({ universities: universities });
    // show the element
    // console.log(universities.map((aa)=>{
    //    return aa.title
    // }) + " ghjkl")
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

    if (showCampus == null) {
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
    } else {
      showContent = showCampus;
    }

    return <div className={classes.Universities}>{showContent}</div>;
  }
}

export default Universities;
