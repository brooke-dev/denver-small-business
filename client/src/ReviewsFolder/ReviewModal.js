import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

const ReviewModal = ({id, handleDelete}) => {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [updated, setUpdated] = useState(false)

    const editMsgClassName = updated ? '' : 'hidden';

  return (
    <>
    <MDBBtn onClick={toggleShow}>Delete</MDBBtn>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Delete</MDBModalTitle>
            <MDBBtn className='btn-close' color='black' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>

          <MDBModalBody>
            <div >
                Are you sure you want to delete? This cannot be undone. 
            </div>
            <button className='submit-btn' onClick={() => handleDelete()} >Confirm Delete</button>         
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>

    <MDBBtn onClick={toggleShow}>Edit</MDBBtn>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Edit</MDBModalTitle>
            <MDBBtn className='btn-close' color='black' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>

          <MDBModalBody>
            <Link to={`/reviews/${id}`}>
              <button className= "edit-btn">Edit</button>
            </Link>    
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </>
  )
}

export default ReviewModal