import React from 'react'

const CardButtonList = ({id, onFlip, onEdit, onDelete}) => {
  return ( <div className="card-action">
      <ul>
    <li className="btn small_button" onClick={() => onFlip()}>Flip</li>
    <li className="btn small_button" onClick={() => onEdit()}>Edit</li>
    <li className="btn small_button" onClick={() => onDelete(id)}>Delete</li>
    </ul>
  </div> )
}

export default CardButtonList