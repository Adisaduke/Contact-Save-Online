import classes from './ContactItem.module.css'
import { Fragment, useState} from 'react'
import CustomButton from '../UI/CustomButton'
import {Link} from 'react-router-dom'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBinLine} from 'react-icons/ri'
import DeleteContact from '../UI/DeleteContact'



const ContactItem = (props) => {
    

    const { id, firstName, lastName, phone, email} = props.contact;
    
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  }


    return (
        <Fragment >
            <div className={classes.container}>
                <div className={classes.name}>
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                </div>
                <div className={classes.utilities}>
                    <div className={classes.contact}>
                        
                        <div className={classes.email}>{email}</div>
                        <div className={classes.phone}>{phone}</div>
                    </div> 
                    <div className={classes.utility}>
                        <Link to= {`/edit/${id}`} state= {props.contact } >
                            <div className={classes.edit}><BiEdit /></div>
                        </Link>
                        <div className={classes.delete}><RiDeleteBinLine onClick={handleShow} /></div>
                    </div>
                </div>
                
                <hr className={classes.hr}/>
            </div>
            <div className={classes.button}>
                <Link to={`/${id}`}>
                    <CustomButton>view Details</CustomButton>
                </Link>
            </div>
            
            <DeleteContact show={show} setShow={setShow} onDelete={id}/>
        </Fragment>
    )

}


export  default ContactItem