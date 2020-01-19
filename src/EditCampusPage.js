import React from 'react';
import NavBar from './components/NavBar';
import EditCampus from './components/campusComponents/EditCampus';

class EditCampusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: [
        {
          id: 1,
          name: 'Lehman College',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
          image:
            'https://www.collegeconsensus.com/wp-content/uploads/2016/12/CUNY-Lehman-College-1024x512.jpg',
          address: 'address goes here'
        }
      ]
    };
  }

  render() {
    const { campus } = this.state;

    return (
      <div>
        <NavBar />
        <EditCampus
          key={campus.id}
          id={campus.id}
          name={campus.name}
          description={campus.description}
          image={campus.image}
          address={campus.address}
        />
      </div>
    );
  }
}

export default EditCampusPage;
