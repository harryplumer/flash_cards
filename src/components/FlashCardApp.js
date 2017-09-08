import React from 'react'
import CardList from './CardList'
import CardForm from './CardForm'

class FlashCardApp extends React.Component {

  state = {cards: [
    {question: "Who won the Super Bowl last year?",
     answer: "New England Patriots",
      id: 0},
    {question: "Who won the World Series last year?",
     answer: "Chicago Cubs",
      id: 1},
    {question: "Who won the NBA Title last year?",
     answer: "Golden State Warriors",
      id: 2},
    {question: "Who won the Stanley Cup last year?",
     answer: "Pittsburgh Penguins",
      id: 3}
  ], id: 4}

  addCard = (question, answer) => {
    let { cards, id } = this.state;
    let card = { question, answer, id}
    this.setState({ 
      cards: [...cards, card],
      id: id + 1
    });
  }

  deleteCard = (id) => {
    let cards = this.state.cards.filter( card => card.id !== id )
    this.setState({ cards });
  }
  
  render(){
    return(
      <div>
        <div className="row">
          <div className="col s6 push-s3">
          <CardForm addCard={this.addCard} />
          </div>
        </div>
        <CardList 
          cards={this.state.cards}
          deleteCard={this.deleteCard} 
        />
      </div>
    )
  }

}

export default FlashCardApp