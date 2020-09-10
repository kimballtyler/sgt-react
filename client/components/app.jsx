import React from 'react';
import Header from './heading';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.state = {
      grades: []
    };
  }

  getAverageGrade() {
    const grades = this.state.grades.slice();
    const totalGrades = grades.reduce((acc, cur) => {
      return acc + cur.grade;
    }, 0);
    if (totalGrades === 0) {
      return 0;
    }
    return Math.ceil(totalGrades / grades.length);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState(state => ({ grades: data })));
  }

  render() {
    this.getAverageGrade();
    return (
      <div className="ml-4 container">
        <Header averageGrade={this.getAverageGrade()} />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
