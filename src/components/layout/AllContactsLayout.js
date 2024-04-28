import { Fragment, useContext, useState } from 'react'
import CustomButton from '../UI/CustomButton'
import classes from './AllContactsLayout.module.css'
import { Link } from 'react-router-dom'
import { ContactContext } from '../../store/ContactContext'


const AllContactsLayout = () => {

    const { contacts, searchQuery, setSearchQuery, filteredData, setFilteredData } = useContext(ContactContext)
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        setSearchQuery(e.target.value)


        const filteredResults = contacts.filter(contact =>
            contact.firstName.toLowerCase().includes(e.target.value.toLowerCase())
            ||
            contact.lastName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filteredResults);
    };


    // if (searchInput.length > 0) {
    //     contacts.filter((contact) => {
    //         return contact.firstName.match(searchInput);
    //     });
    // }

    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.home}>
                    <p className={classes.phoneBook}>Phone Book</p>
                    <div className={classes.search}>
                        <input
                            onChange={handleChange}
                            value={searchQuery}
                            type='text' placeholder='search..' name='search' />
                        <CustomButton>Search</CustomButton>
                    </div>

                </div>
                <div className={classes.add}>
                    <Link to='/newcontact'><CustomButton>Add New +</CustomButton></Link>
                </div>
            </div>



        </Fragment>
    )
}


export default AllContactsLayout