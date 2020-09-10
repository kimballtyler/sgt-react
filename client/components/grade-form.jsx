import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({
        name: event.target.value
      });
    } else if (event.target.name === 'course') {
      this.setState({
        course: event.target.value
      });
    } else {
      this.setState({
        grade: parseFloat(event.target.value)
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="col-3 ml-5 mt-2" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-md mb-3">
          <div className="input-group-prepend">
            <i className="fa fa-user input-group-text" aria-hidden="true" style={{ color: (221, 221, 221) }}></i>
          </div>
          <input onChange={this.handleChange} value={this.state.name} name="name" type="text" className="form-control" placeholder="Student Name"/>
        </div>

        <div className="input-group input-group-md mb-3">
          <div className="input-group-prepend">
            <i className="fa fa-list-alt input-group-text" aria-hidden="true" style={{ color: (221, 221, 221) }}></i>
          </div>
          <input onChange={this.handleChange} value={this.state.course} name="course" type="text" className="form-control" placeholder="Student Course"/>
        </div>

        <div className="input-group input-group-md mb-3">
          <div className="input-group-prepend">
            <i className="fa fa-graduation-cap input-group-text" aria-hidden="true" style={{ color: (221, 221, 221) }}></i>
          </div>
          <input onChange={this.handleChange} value={this.state.grade} name="grade" type="number" className="form-control" placeholder="Student Grade"/>
        </div>

        <button onClick={this.handleSubmit} type="submit" className="btn btn-md btn-success mr-2">Add</button>
        <button onClick={this.handleReset} type="reset" className="btn btn-md btn-outline-secondary">Cancel</button>
      </form>
    );
  }
}

export default GradeForm;
