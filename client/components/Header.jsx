import React from "react";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Counter</span>
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </nav>
    </div>
  );
};

export default Header;
