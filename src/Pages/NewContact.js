import React, { useContext } from 'react'
import ContactForm from '../components/contacts/ContactForm'
import { Fragment } from 'react'
import { ContactContext } from '../store/ContactContext'
import { v4 as uuidv4 } from 'uuid'


const NewContact = () => {

  const { contacts, setContacts } = useContext(ContactContext)


  const contactSaveHandler = (contact) => {
    console.log(contact)
    setContacts([
      { id: uuidv4(), ...contact }, ...contacts
    ])
  }
  return (
    <Fragment>
      <ContactForm onSaveContact={contactSaveHandler} />
    </Fragment>
  )
}

export default NewContact