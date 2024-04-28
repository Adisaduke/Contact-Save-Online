import { Fragment, useContext, } from "react"
import ContactItem from "./ContactItem"
import { ContactContext } from "../../store/ContactContext"
import { useState } from "react"

const ContactList = () => {

    const { contacts, filteredData } = useContext(ContactContext)
    const [searchInput, setSearchInput] = useState('')

    // if (searchInput.length > 0) {
    //     contacts.filter((contact) => {
    //         return contact.firstName.match(searchInput);
    //     });
    // }

    return (
        <Fragment>
            {filteredData.length > 0 ? (
                filteredData.map(contact => (
                    <ContactItem
                        key={contact.id} // Ensure each item has a unique key
                        contact={contact}
                    />
                ))
            ) : (
                contacts.map(contact => (
                    <ContactItem
                        key={contact.id} // Ensure each item has a unique key
                        contact={contact}
                    />
                ))
            )}

        </Fragment>
    )
}


export default ContactList