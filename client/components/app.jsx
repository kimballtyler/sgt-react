import React from 'react';
import Header from './heading';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.postNewGrade = this.postNewGrade.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(gradeId) {
    const index = this.state.grades.findIndex(item => item.id === gradeId);
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE'
    });
    const newGrades = this.state.grades.slice();
    newGrades.splice(index, 1);
    this.setState({ grades: newGrades });
  }

  getAverageGrade() {
    const grades = this.state.grades.slice();
    const totalGrades = grades.reduce((acc, cur) => {
      if (typeof cur.grade !== 'number') {
        return acc;
      }
      return acc + cur.grade;
    }, 0);
    if (grades.length === 0) {
      return 0;
    }
    return Math.ceil(totalGrades / grades.length);
  }

  postNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        const newGrades = this.state.grades.slice();
        newGrades.push(data);
        this.setState({ grades: newGrades });
      });
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
        <div className="row">
          <GradeTable handleDelete={this.handleDelete} grades={this.state.grades} />
          <GradeForm onSubmit={this.postNewGrade} />
        </div>
      </div>
    );
  }
}

export default App;
