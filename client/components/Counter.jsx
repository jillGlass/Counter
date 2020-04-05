import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: 0,
    tags:['tag1', 'tag2', 'tag3']
  };

  

  render() {
   

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <Button className="btn btn-secondary btn-sm">Increment</Button>
        <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
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
