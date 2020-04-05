import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: 0
  };

  

  render() {
   

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <Button className="btn btn-secondary btn-sm">Increment</Button>
      </React.Fragment>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
      }
}

export default Counter;
