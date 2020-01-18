import React from 'react';
import StudentItem from './components/StudentItem';
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
          campusName: 'Brookyln',
          image: 'Image goes here'
        },
        {
          id: 3,
          studentName: 'Jack',
          campusName: 'Baruch',
          image: 'Image goes here'
        }
      ]
    };
  }

  render() {
    const { students } = this.state;

    return (
      <div>
        {students.map(students => (
          <StudentItem
            studentName={students.studentName}
            campusName={students.campusName}
            image={students.image}
          />
        ))}
      </div>
    );
  }
}

export default CampusPage;
