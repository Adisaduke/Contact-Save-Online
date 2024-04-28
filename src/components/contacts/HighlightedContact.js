import React from 'react'

const HighlightedContact = (props) => {
  console.log(props)

  return (
    <div className='highlightedcontact'>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.address1}</p>
      <p>{props.about}</p>
    </div>
  )
}

export default HighlightedContact