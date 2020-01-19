import React from 'react';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1em'
  },
  image: {
    fontSize: '10em'
  },
  name: {
    fontSize: '2em'
  },
  description: {
    fontSize: '0.8em'
  }
};

const StudentDetail = ({ studentName, campusName, image }) => (
  <div style={styles.wrapper}>
    <span>{image}</span>
    <span style={styles.name}>{studentName}</span>
    <span style={styles.description}>{campusName}</span>
  </div>
);

export default StudentDetail;
