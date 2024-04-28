import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HighlightedContact from '../components/contacts/HighlightedContact';
import useHttp from '../httpRequest/use-http';
import { getSingleContact } from '../httpRequest/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const DUMMY_CONTACTS = [
//   {
//       id:'1',
//       lastName: 'Rasak',
//       email: 'adisa.rasak@yahoo.com', 
//       phone: '08132984990',
//   },

//   {
//       id:'2',
//       lastName: 'Duke',
//       email: 'adisa.rasak@yahoo.com',
//       phone: '08132984990',
//   },

//   {
//       id:'3',
//       lastName: 'Opeyemi',
//       email: 'opyemiduke_rasakajei@gmail.com',
//       phone: '08132984990',
//   },

//   {
//       id:'4',
//       name: 'Opeyemi Duke',
//       email: 'adisa.rasakadisarasa@yahoo.com',
//       number: '08132984990',
//   }
// ]


function ContactDetail() {

  const params = useParams();
  const {contactId} = params;

  const {sendRequest, status, data: loadedContact, error} = 
  useHttp(getSingleContact, true)

  useEffect(() => {
    sendRequest(contactId)
  }, [sendRequest, contactId])


  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedContact) {
    return <p>No contact found</p>
  }
  return (
    <Fragment>
      <HighlightedContact 
        lastName={loadedContact.lastName}
        email={loadedContact.email}
        phone={loadedContact.phone}
        about={loadedContact.about}
        address1={loadedContact.address1}
      />
      <div>ContactDetail</div>
      <p>{params.contactId}</p>
    </Fragment>

  )
}

export default ContactDetail