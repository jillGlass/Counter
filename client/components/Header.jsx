import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
    <span className='badge badge-pill badge-secondary'>{this.props.totalCounters}</span>
      </nav>
    );
  }
}
