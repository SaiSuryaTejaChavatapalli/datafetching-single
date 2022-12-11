import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  updateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateCount}>
          Button clicked {count} times!
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
