import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    let content;
    if (this.props.frontShowing) {
      content = this.props.content;
    } else {
      content = "ARE YOU SURE?";
    }
    return (
      <div
        onClick={this.props.flip}
        className={`Card ${this.props.frontShowing ? "showing" : ""}`}
      >
        {content}
        {this.props.frontShowing ? (
          <img
            src={`./img/${this.props.content}.png `}
            alt=""
            width="150"
            height="150"
          ></img>
        ) : null}
      </div>
    );
  }
}

export default Card;
