import { Component } from "react";

class WelcomeClass extends Component {
  render() {
    return <h1>Hello, {this.props.firstP}</h1>;
  }
}

export default WelcomeClass;
