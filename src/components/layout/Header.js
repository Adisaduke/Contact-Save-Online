import React, { useEffect, useRef, useContext } from "react";
import * as FaIcons from 'react-icons/fa'
import { useState } from "react";
import avi from '../assets/Duke.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Header.css'
import { ContactContext } from "../../store/ContactContext";


const Header = () => {

    const { contacts } = useContext(ContactContext)


    const [sidebar, setSidebar] = useState(false)

    const sidebarHandler = () => {
        setSidebar(!sidebar)
    }


    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setSidebar(false)
            }
        }

        document.addEventListener('mousedown', handler);


        return () => {
            document.removeEventListener('mousedown', handler)
        }

    })



    return (
       
            <header className="header" ref={menuRef}>
                <div className='bars' >
                    <FaIcons.FaBars className='bar' onClick={sidebarHandler} />               </div>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/'> <div className='logo'>Contact Information</div></Link>
                <div ref={menuRef} className={sidebar ? "sidenav active" : "sidenav"}>
                    <div className="profile_details">
                        <img src={avi} alt='Duke Avi' />
                        <p className="name">Adisa</p>
                        <p className="userName">@duke_01</p>
                        <p><span className="span1">{contacts.length}</span>contacts</p>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li className="hiden"><a href="#">Profile</a></li>
                        <li><a href="#">All Contacts<span className="span2">{contacts.length}</span></a></li>
                        <li><Link to='newcontact'>Add New +</Link></li>
                        <li className="hiden"><a href="#">History</a></li>
                        <li className="hiden"><a href="#">Support</a></li>
                        <li className="hiden"><a href="#">Setting and Privacy</a></li>
                        <li className="hiden"><a href="#">LogOut</a></li>
                        <li><button>LogOut</button></li>
                    </ul>
                </div>

            </header>
    
    )
};



export default Header
