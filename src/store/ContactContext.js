import React from "react";
import { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid'


export const ContactContext = createContext()


export const ContactProvider = (props) => {

    const [searchInput, setSearchInput] = useState('')

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);



    const [contacts, setContacts] = useState([
        {
            id: uuidv4(),
            firstName: 'Afolabi',
            lastName: 'Rasak',
            email: 'adisa.rasak@yahoo.com',
            phone: '08132984990',
            address1: 'Amuloko1',
            address2: 'Amuloko2',
            country: 'Nigeria',
            state: 'Oyo',
            about: 'This is a nice person'
        },

        {
            id: uuidv4(),
            firstName: 'Adisa',
            lastName: 'Duke',
            email: 'adisa.rasak@yahoo.com',
            phone: '08132984990',
            address1: 'Amuloko1',
            address2: 'Amuloko2',
            country: 'Nigeria',
            state: 'Oyo',
            about: 'This is a nice person'
        },

        {
            id: uuidv4(),
            firstName: 'Olawale',
            lastName: 'Opeyemi',
            email: 'opyemiduke_rasakajei@gmail.com',
            phone: '08132984990',
            address1: 'Amuloko1',
            address2: 'Amuloko2',
            country: 'Nigeria',
            state: 'Oyo',
            about: 'This is a nice person'
        },

        {
            id: uuidv4(),
            firstName: 'Demola',
            lastName: 'Yinka',
            email: 'adisa.rasakadisarasa@yahoo.com',
            phone: '08132984990',
            address1: 'Amuloko1',
            address2: 'Amuloko2',
            country: 'Nigeria',
            state: 'Oyo',
            about: 'This is a nice person'
        },

        {
            id: uuidv4(),
            firstName: 'Omojoju',
            lastName: 'Kasali',
            email: 'omojoju.kasali@yahoo.com',
            phone: '08132984990',
            address1: 'Amuloko1',
            address2: 'Amuloko2',
            country: 'Nigeria',
            state: 'Oyo',
            about: 'This is a nice person'
        },

    ])


    const deleteHandler = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }


    return (
        <ContactContext.Provider
            value={{
                contacts, setContacts, searchInput,
                setSearchInput, deleteHandler, searchQuery,
                setSearchQuery,
                filteredData,
                setFilteredData,
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}