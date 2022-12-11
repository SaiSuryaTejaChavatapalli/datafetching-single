import React, { Component } from "react";

class ClassUseEffectConditioanlly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  updateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.updateCount}>
          Button clicked {count} times!
        </button>
      </div>
    );
  }
}

export default ClassUseEffectConditioanlly;
