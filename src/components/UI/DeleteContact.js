import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { ContactContext } from '../../store/ContactContext';



const DeleteContact = ({ show, setShow, onDelete }) => {

  const { contacts, setContacts } = useContext(ContactContext)

  const deleteHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
    console.log('id', id)
    setShow(!show)
  }


  const closeModal = () => {
    setShow(!show)
  }



  return (
    <Modal show={show}>
      <Modal.Header onClick={closeModal} closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="alert alert-danger">
          <p>Are you sure you want to delete this contact?
            Once you delete it, it can not be recovered!
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="default" onClick={closeModal}>Close</Button>
        <Button onClick={() => deleteHandler(onDelete)} variant="danger">Delete Contact</Button>
      </Modal.Footer>
    </Modal>
  )
}


export default DeleteContact