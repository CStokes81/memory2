import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    let content;
    if (this.props.showing) {
      content = this.props.content;
    } else {
      content = "Back";
    }
    return (
      <div
        onClick={this.props.flip}
        className={`Card ${this.props.showing ? "frontShowing" : " "}`}
      >
        {content}
      </div>
    );
  }
}

export default Card;
