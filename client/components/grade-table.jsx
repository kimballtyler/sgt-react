import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td className="text-center">{props.grade.name}</td>
      <td className="text-center">{props.grade.course}</td>
      <td className="text-center">{props.grade.grade}</td>
      <td className="text-center"><button onClick={() => props.handleDelete(props.grade.id)} className="btn-outline-danger btn">DELETE</button></td>
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
      <table className="col-7 table table-dark table-striped table-bordered table-hover mt-1">
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
    <table className="table col-7 table-dark table-striped table-bordered table-hover mt-1">
      <TableHeading />
      <tbody>
        {
          props.grades.map(grade => {
            return (
              <Grade handleDelete={props.handleDelete} key={grade.id} grade={grade} />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default GradeTable;
