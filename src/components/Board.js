import React from "react";
import Card from "./Card.js";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const cardImage = [
      "eBay",
      "etsy",
      "facebook",
      "instagram",
      "Linkedin",
      "pinterest",
      "snapchat",
      "tictok",
      "twitter",
      "whatsapp",
    ];

    const deck = cardImage
      .concat(cardImage)
      .sort(() => Math.random() - 0.5)
      .map((c) => {
        return {
          content: c,
          frontShowing: false,
        };
      });
    this.state = {
      deck: deck,
      initialCard: null,
    };
  }

  flipCardTo(cardIndex, frontShowing) {
    this.setState({
      deck: this.state.deck.map((c, i) => {
        if (i === cardIndex) {
          return {
            content: c.content,
            frontShowing: !c.frontShowing,
          };
        } else {
          return c;
        }
      }),
    });
  }

  flip(cardIndex) {
    console.log(this.state.deck, cardIndex);
    if (this.state.initialCard === null) {
      this.setState({ initialCard: cardIndex });
    } else {
      const initialCardContent = this.state.deck[this.state.initialCard]
        .content;
      const secondCardContent = this.state.deck[cardIndex].content;
      console.log(initialCardContent, secondCardContent);
      if (initialCardContent === secondCardContent) {
        this.setState({ initialCard: null });
        console.log("Match");
      } else {
        console.log(`Different: ${initialCardContent} != ${secondCardContent}`);
        setTimeout(() => {
          this.flipCardTo(this.state.initialCard, false);
          this.flipCardTo(cardIndex, false);
          this.setState({ initialCard: null });
        }, 1000);
      }
    }
    this.flipCardTo(cardIndex, !this.state.deck[cardIndex].frontShowing);
  }

  render() {
    console.log(this.state.initialCard);
    return this.state.deck.map((c, i) => {
      return (
        <div className="Board">
          <Card
            flip={() => {
              this.flip(i);
            }}
            content={c.content}
            frontShowing={c.frontShowing}
          />
        </div>
      );
    });
  }
}

export default Board;
