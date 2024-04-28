import React from 'react'
import { Fragment } from 'react'
import AllContactsLayout from './AllContactsLayout'
import ContactList from '../contacts/ContactsList'


function Home() {
  return (
    <Fragment>
      <AllContactsLayout />
      <ContactList />
    </Fragment>
  )
}

export default Home