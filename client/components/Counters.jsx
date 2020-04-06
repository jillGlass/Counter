import React from "react";
import Counter from "./Counter";
import Header from "./Header";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <Header />
          {this.state.counters.map(counter => (
            <Counter key={counter.id} value={counter.value} selected={true} />
          ))}
      </div>
    );
  }
}

export default Counters;
