import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import HighlightedContact from '../components/contacts/HighlightedContact';
import { ContactContext } from '../store/ContactContext';


function ContactDetail() {

  const { contacts } = useContext(ContactContext)

  const params = useParams();

  const contact = contacts.find(contact => contact.id === params.contactId)


  return (
    <Fragment>
      <HighlightedContact
        firstName={contact.firstName}
        lastName={contact.lastName}
        email={contact.email}
        phone={contact.phone}
        about={contact.about}
        address1={contact.address1}
      />
      <div>ContactDetail</div>
      <p>{params.contactId}</p>
    </Fragment>

  )
}

export default ContactDetail