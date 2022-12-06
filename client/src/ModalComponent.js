import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
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

function ModalComponent({user, setUser}) {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [updated, setUpdated] = useState(false)
    // User Profile state
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [username, setUsername] = useState(user.username)
    const [businessOwner, setBusinessOwner] = useState(user.business_owner)
    const [zipCode, setZipCode] = useState(user.zip_code)
    const [email, setEmail] = useState(user.email)
    const [avatarData, setAvatarData] = useState(null)

    // const history = useHistory()
  
    // renders the user you want to edit
    const userId = user.id  
    // console.log(user_id)

    // Handles all of the values from form inputs
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleBusOwnerChecked = () =>{
        setBusinessOwner(businessOwner => !businessOwner)
    }

    const handleZipCode = (e) => {
        setZipCode(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleAvatarData = (e) => {
      setAvatarData(e.target.files[0])
    }

    // Do not need a useEffect hook to fetch user id as we are passing in the current user who is logged in. 
      // Checked with console.log(user.id)

    // send update form data to database

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
      //   const formData = {
      //       first_name: firstName,
      //       last_name: lastName,
      //       username: username, 
      //       business_owner: businessOwner,
      //       zip_code: zipCode,
      //       email: email,
      //       user_id: userId,
      //       avatar: avatarData,
      // }

        const formData = new FormData()
        formData.append('user_id', userId)
        formData.append('avatar', avatarData)
        formData.append('first_name', firstName)
        formData.append('last_name', lastName)
        formData.append('username', username)
        formData.append('business_owner', businessOwner)
        formData.append('zip_code', zipCode)
        formData.append('email', email)
        
        fetch(`users/${userId}`,{
          method: "PATCH",
          // headers: {
          //   "Content-Type": "application/json"
          // },
          body: formData,
          })
          .then(res => {
            if (res.ok) {
              res.json().then((updatedProfile) => {
                setUser(updatedProfile)
                setUpdated(updated => !updated)
              });
            } else {
              res.json().then((err) => console.log(err))
            }
          })
  
     }
  
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
            <div className='user-form-container'>
                <form className="user-form" autoComplete='off' onSubmit={handleUpdateSubmit}>

                    <label>First Name:</label>
                    <input type='text'id="name" name="first_name" value={firstName} onChange={handleFirstName} required/>

                    <label>Last Name:</label>
                    <input type='text'id="name" name="last_name" value={lastName} onChange={handleLastName} required/>

                    <label>Username:</label>
                    <input type='text'id="username" name="username" value={username} onChange={handleUsername} required/>

                    <label>Email:</label>
                    <input type='text'id="email" name="email" value={email} onChange={handleEmail} required/>

                    <label>Business Owner
                        <input type="radio" id="business_owner" name="business_owner" checked={businessOwner ? "checked" : ''} value={businessOwner} onChange={handleBusOwnerChecked} />
                    </label>

                    <label>Zip Code:</label>
                    <input type='text'id="zip_code" name="zip_code" value={zipCode} onChange={handleZipCode} required/>

                    <label> Avatar </label>
                    <input type= 'file' accept='image/*' onChange={handleAvatarData} />
                    
                    <MDBBtn>Save changes </MDBBtn>
                      <div id="edit-complete-msg" className={editMsgClassName}>
                      <h3>Edit complete!</h3>
                      </div>
                    
                </form>
            </div>
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

export default ModalComponent