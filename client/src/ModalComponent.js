import React, {useState, useEffect} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
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

function ModalComponent({user, updateUserProfile, setUpdateUserProfile}) {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [updated, setUpdated] = useState(false)
    const [errors, setErrors] = useState([])
    // User Profile state
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [username, setUsername] = useState(user.username)
    const [businessOwner, setBusinessOwner] = useState(user.business_owner)
    const [zipCode, setZipCode] = useState(user.zip_code)
    const [email, setEmail] = useState(user.email)

    const history = useHistory()
  
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

    // Fetch request for correct user info
    // useEffect(() => {
    //     fetch(`users/${userId}`)
    //     .then ((res) => res.json())
    //     .then ((user) => {
    //         setFirstName(user.first_name)
    //         setLastName(user.last_name)
    //         setUsername(user.username)
    //         setBusinessOwner(user.business_owner)
    //         setZipCode(user.zip_code)
    //         setEmail(user.email)
    //         console.log(user)
            
    //     });

    // }, [userId, setUpdateUserProfile])
    // console.log(userId)
    

    // send update form data to database

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const formData = {
            first_name: firstName,
            last_name: lastName,
            username: username, 
            business_owner: businessOwner,
            zip_code: zipCode,
            email: email,
            user_id: userId,
      }
        
        fetch(`user/${userId}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
          })
          .then(res => {
            if (res.ok) {
              res.json().then((updatedProfile) => {
                setUpdateUserProfile(updatedProfile)
                setUpdated(updated => !updated)
              });
            } else {
              res.json().then((err) => console.log(err))
            }
          })
  
     }
  
    const editMsgClassName = updated ? '' : 'hidden';
    const formErrorMsg = errors.map((err) => (
        <p key={err}>{err}</p>
        ))

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
        
                </form>
            </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default ModalComponent