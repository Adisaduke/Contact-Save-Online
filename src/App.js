import Layout from './components/layout/Layout';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/layout/Home';
import ContactDetail from './Pages/ContactDetail';
import NewContact from './Pages/NewContact';
import { ContactContext } from './store/ContactContext';
import { useEffect, useContext } from 'react';
import EditForm from './components/UI/EditForm';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {


  const { contacts, setContacts } = useContext(ContactContext)
  const LOCAL_STORAGE_KEY = 'contacts';

  const FormUpdate = (editUpdate) => {
    console.log(editUpdate)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/newcontact' element={<NewContact />} />
        <Route path='/:contactId' element={<ContactDetail />} />
        <Route path='/edit/:Id' element={<EditForm onUpdateContact={FormUpdate} />} />
      </Routes>
    </Layout>

  )
}

export default App;
