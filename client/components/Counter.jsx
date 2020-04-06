import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    this.setState({count: this.state.count +1})
  };
  
  render() {
    console.log('props', this.props)
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <Button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </Button>
      </div>
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
