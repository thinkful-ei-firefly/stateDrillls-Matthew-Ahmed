import React, { Component } from "react";

export default class RouletteGun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      bulletInChamber: this.props.bulletInChamber
        ? this.props.bulletInChamber
        : 8,
      timeout: undefined
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  clickHandler = () => {
    this.setState({ spinningTheChamber: true });
    const timeout = setTimeout(() => {
      const number = Math.floor(Math.random() * 8 + 1);
      this.setState({ chamber: number, spinningTheChamber: false });
    }, 2000);
    this.setState({ timeout });
  };
  renderText = () => {
    if (this.state.spinningTheChamber) {
      return "spinning the chamber and pulling the trigger!";
    } else if (this.state.chamber === this.state.bulletInChamber) {
      return "Bang";
    } else {
      return "you're safe";
    }
  };
  render() {
    return (
      <div>
        <p>{this.renderText()}</p>
        <button onClick={this.clickHandler}>Pull the trigger!</button>
      </div>
    );
  }
}
