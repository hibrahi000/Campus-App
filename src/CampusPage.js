import React from 'react';
import StudentItem from './components/StudentItem';
import CampusItem from './components/campusComponents/CampusItem';
import NavBar from './components/NavBar';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

class CampusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          studentName: 'John',
          campusName: 'Lehman',
          image: 'Image goes here'
        },
        {
          id: 2,
          studentName: 'Mary',
          campusName: 'Lehman',
          image: 'Image goes here'
        },
        {
          id: 3,
          studentName: 'Jack',
          campusName: 'Lehman',
          image: 'Image goes here'
        }
      ],
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

  handleOnCampusClick = () => {
    this.props.history.push('/editCampus');
  };

  render() {
    const { students, campus } = this.state;

    return (
      <div>
        <NavBar />
        <div>
          {campus.map(campus => (
            <CampusItem
              key={campus.id}
              id={campus.id}
              name={campus.name}
              description={campus.description}
              image={campus.image}
              address={campus.address}
              handleOnCampusClick={this.handleOnCampusClick}
            />
          ))}
        </div>
        {students.length > 0 ? (
          <div>
            <h1>Students:</h1>
            {students.map(students => (
              <StudentItem
                key={students.id}
                id={students.id}
                studentName={students.studentName}
                campusName={students.campusName}
                image={students.image}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2>no students curently registered in this campus</h2>
            <button>add students</button>
          </div>
        )}
      </div>
    );
  }
}

export default CampusPage;
