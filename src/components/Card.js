import React from 'react'
import CardButtonList from './CardButtonList'
import EditCardForm from './EditCardForm'

class Card extends React.Component{
  state = {showAnswer: false, edit: false, question: this.props.question, answer: this.props.answer}
  
  flipCard = () => {
    this.setState({showAnswer: !this.state.showAnswer}) 
  }

  edit = () => {
    if (!this.state.edit)
      this.setState({edit: true})
  }

  saveCard = (question, answer) => {
    this.setState({showAnswer: false, edit: false, question: question, answer: answer})
  }

  

  cardBody = () => {

    if (!this.state.edit){
      if (!this.state.showAnswer)
        return <span ref="question">{this.state.question}</span>
      else
        return <span ref="answer">{this.state.answer}</span>
    }
    else
      return <EditCardForm question={this.props.question} answer={this.props.answer} saveCard={this.saveCard} />
  }

  

  render(){
    return(
      <div>
        {this.cardBody()}
        <br />
        <CardButtonList id={this.props.id} onFlip={this.flipCard} onEdit={this.edit} onDelete={this.props.deleteCard} />
      </div>
    )

  }

}

export default Card