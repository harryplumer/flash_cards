import React from 'react'
import Card from './Card'

class CardList extends React.Component{
  render() {
    let cards = this.props.cards.map( (card) => {
      return ( 
        <Card
          key={card.id}
          deleteCard={this.props.deleteCard} 
          {...card} 
        /> 
      )
    });

    return (
      <div className="row">
        {cards}  
      </div>
    )
  }
}

export default CardList