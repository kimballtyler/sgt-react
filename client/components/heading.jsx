import React from 'react';

function Header(props) {
  return (
    <div className="row mt-2">
      <h2 className="mb-4 col-4">Student Grade Table</h2>
      <div className="col-2 display-5 text-muted offset-lg-6 mt-1">Average Grade <span className="badge-pill badge badge-info">{props.averageGrade}</span>
      </div>
    </div>
  );
}

export default Header;
