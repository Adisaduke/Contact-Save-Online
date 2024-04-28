import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

function Stesting() {
    const params = useParams()

  return (
    <Fragment>
        <div>Stesting</div>
        <p>{params.contactId}</p>
    </Fragment>
  )
}

export default Stesting