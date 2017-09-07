import React from 'react'

const CardButtonList = ({id, onFlip, onEdit, onDelete}) => {
  return ( <div>
    <span onClick={() => onFlip()}>Flip</span>
    <span onClick={() => onEdit()}>Edit</span>
    <span onClick={() => onDelete(id)}>Delete</span>
  </div> )
}

export default CardButtonList