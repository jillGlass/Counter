import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: 0
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <Button>Increment</Button>
      </React.Fragment>
    );
  }
}

export default Counter;
