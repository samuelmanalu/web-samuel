import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button-icon-square.sass";

export default class ButtonIconSquare extends Component {
  render() {
    return (
      <Button
        className={"button-icon-square" + this.getPropsStyle()} 
        id={this.props.id}
        onClick={this.props.clickAction}
        value={this.props.value}
      >
        <FontAwesomeIcon icon={this.props.icon} />
      </Button>
    );
  }

  getPropsStyle() {
    if (this.props.style == "grey") {
      return " btn-light";
    } else {
      return " btn-danger";
    }
  }
}
