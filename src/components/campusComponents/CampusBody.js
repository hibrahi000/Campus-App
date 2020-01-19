import React from 'react';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '1em'
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1em'
  },

  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1em'
  },
  image: {
    borderRadius: '15px'
  },

  name: {
    fontSize: '2em'
  },
  description: {
    fontSize: '0.8em'
  }
};

const CampusDetail = ({ name, description, image, address, id }) => (
  <div style={styles.wrapper}>
    <div style={styles.imageContainer}>
      <span>
        <img style={styles.image} src={image} alt="" />
      </span>
      <span style={styles.description}>{address}</span>
    </div>
    <div style={styles.descriptionContainer}>
      <span style={styles.name}>{name}</span>
      <span style={styles.description}>{description}</span>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  </div>
);

export default CampusDetail;
