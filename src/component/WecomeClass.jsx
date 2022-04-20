import { Component } from "react";

// style the welcomeclass with color red in App.js

class WelcomeClass extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.props.firstP}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
        <p>Th value of the counter in the state is: {this.state.counter}</p>
      </div>
    );
  }
}

export default WelcomeClass;
