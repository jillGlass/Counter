import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
      console.log('yup!')
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && <p>Please create a new tag</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
