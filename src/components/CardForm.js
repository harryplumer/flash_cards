import React from 'react'

class CardForm extends React.Component{
  state = { question: '', answer: '' } 
  
  addCard = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.question, this.state.answer);
    this.setState({ question: '', answer: '' })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render(){
    return(
      <form onSubmit={this.addCard}>
      <input 
        name="question"
        value={this.state.question}
        onChange={this.handleChange}
        placeholder="Add the question" 
      />
      <input 
        name="answer"
        value={this.state.answer}
        onChange={this.handleChange}
        placeholder="Add the answer" 
      />
      <input type="submit" value="Add Card" />
    </form>

    )
  }

}

export default CardForm