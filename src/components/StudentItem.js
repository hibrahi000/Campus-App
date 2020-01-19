import React, { PureComponent } from 'react';
import StudentBody from './StudentBody';
const styles = {
  li: {
    display: 'inline-block',
    justifyContent: 'flex-start',
    background: 'white',
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
    color: '#707070',
    margin: '1em',
    cursor: 'pointer'
  }
};

export default class StudentItem extends PureComponent {
  render() {
    return (
      <li style={styles.li}>
        <StudentBody
          studentName={this.props.studentName}
          campusName={this.props.campusName}
          image={this.props.image}
          address={this.props.address}
        />
      </li>
    );
  }
}
