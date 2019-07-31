import React, { Component } from "react";

export default class HelloWorld extends Component {
  state = {
    who: ""
  };
  handleClick = e => {
    let message: "";
    if (e.target.value === "World") {
      message = "Hello, world!";
    } else if (e.target.value === "Friend") {
      message = "Hello, friend!";
    } else {
      message = "Hello, React";
    }
    this.setState({ who: message });
  };
  render() {
    return (
      <div>
        <p>{this.state.who}</p>
        <button onClick={this.handleClick} value="World">
          World
        </button>
        <button onClick={this.handleClick} value="Friend">
          Friend
        </button>
        <button onClick={this.handleClick} value="React">
          React
        </button>
      </div>
    );
  }
}
