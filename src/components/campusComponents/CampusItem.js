import React, { PureComponent } from 'react';
import CampusBody from './CampusBody';
import classes from './style.module.css';

export default class CampusItem extends PureComponent {
  render() {
    return (
      <div className={classes.campusList}>
        <li onClick={() => this.props.handleOnCampusClick(this.props.id)}>
          <CampusBody
            name={this.props.name}
            description={this.props.description}
            image={this.props.image}
            address={this.props.address}
          />
        </li>
      </div>
    );
  }
}
