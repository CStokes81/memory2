import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    let content;
    if (this.props.frontShowing) {
      content = this.props.content;
    } else {
      content = "Back";
    }
    return (
      <div
        onClick={this.props.flip}
        className={`Card ${this.props.frontShowing ? "showing" : ""}`}
      >
        {content}
      </div>
    );
  }
}

export default Card;
