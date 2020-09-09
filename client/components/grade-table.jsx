import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
    </tr>
  );
}

function TableHeading() {
  return (
    <thead className="thead-darker">
      <tr className="bg-info">
        <th className="text-center">Student Name</th>
        <th className="text-center">Course</th>
        <th className="text-center">Grade</th>
        <th className="text-center">Operations</th>
      </tr>
    </thead>
  );
}

function GradeTable(props) {
  if (props.grades.length === 0) {
    return (
      <table className="col-7 table table-dark table-striped table-bordered table-hover mt-3">
        <TableHeading />
        <tbody>
          <tr>
            <td className="text-center">No grades recorded</td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <table className="table col-6 table-dark table-striped table-bordered table-hover mt-3">
      <TableHeading />
      <tbody>
        {
          props.grades.map(grade => {
            return (
              <Grade key={grade.id} grade={grade} />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default GradeTable;
