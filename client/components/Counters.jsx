import React from "react";
import Counter from "./Counter";
import Header from "./Header";

class Counters extends React.Component {
  
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            
            
          >
            {" "}
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
