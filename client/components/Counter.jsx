import React from "react";
import { Button, Badge } from "react-bootstrap";

class Counter extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
        <Badge style={{width: 55}}className={this.getBadgeClasses()}>{this.formatCount()}</Badge>
        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </Button>
        
        <Button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary m-2 btn-sm"
          disabled={this.props.counter.value === 0 ? 'disabled' : ''}
        >
          -
        </Button>
        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2 btn-sm"
        >
          x
        </Button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  
  }
}

export default Counter;
