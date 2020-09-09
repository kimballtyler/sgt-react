import React from 'react';
import Header from './heading';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  render() {
    return (
      <div className="ml-4">
        <Header />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
