import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: 0,
    
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  

  render() {
    return (
      <React.Fragment>
         
        <span className='badge badge-primary m-2'>{this.formatCount()}</span>
        <Button className='btn btn-secondary btn-sm'>Increment</Button>
      </React.Fragment>
    );
  }
}

export default Counter;
