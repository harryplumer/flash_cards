import React from 'react'

class EditCardForm extends React.Component{
    state = { question: this.props.question, answer: this.props.answer } 
  
  saveCard = (e) => {
    e.preventDefault();
    this.props.saveCard(this.state.question, this.state.answer);
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render(){
    return(
      <form onSubmit={this.saveCard}>
      <input 
        name="question"
        value={this.state.question}
        onChange={this.handleChange}
      />
      <input 
        name="answer"
        value={this.state.answer}
        onChange={this.handleChange} 
      />
      <input className="btn small_button" type="submit" value="Save Card" />
    </form>

    )
  }

}

export default EditCardForm