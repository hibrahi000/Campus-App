import React, { PureComponent } from 'react';
import CampusBody from './CampusBody';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'flex-start',
    background: 'white',
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
    color: '333A40',
    margin: '1em'
  },
  leftWall: color => ({
    width: '1em',
    backgroundColor: color
  })
};

export default class CampusItem extends PureComponent {
  render() {
    return (
      <li style={styles.li}>
        <div style={styles.leftWall('#333A40')} />
        <CampusBody
          name={this.props.name}
          description={this.props.description}
          image={this.props.image}
          address={this.props.address}
        />
      </li>
    );
  }
}
