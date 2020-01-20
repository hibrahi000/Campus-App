import React, { Component } from 'react'

import classes from "./Contents.module.css"
import Universities from '../../Universities/Universities'

export default class Contents extends Component {

    addCampus = (e) =>(
        // to the form to add campus
        console.log(e.target)
    );

    render() {
        return (
            <div className={classes.Contents}>
                <Universities
                clicked = {this.addCampus}
                ></Universities>
            </div>
        )
    }
}
