import React, {useState} from 'react'

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

const ReviewModal = ({openModal, handleClose, handleDelete}) => {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [updated, setUpdated] = useState(false)

    const editMsgClassName = updated ? '' : 'hidden';

  return (
    <>
    <MDBBtn onClick={toggleShow}>Edit Profile</MDBBtn>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Edit Profile</MDBModalTitle>
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
  </>
  )
}

export default ReviewModal