import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography} from 'mdb-react-ui-kit';
import UserProfileModalComponent from './UserProfileModalComponent';
import './UserProfileCSS.css'

function UserProfile({user, setUser}) {
  
  return (
    <div>
      <h1>Hi, {user.first_name}</h1>
      <section  style={{ backgroundColor: '#f4f5f7' }} className= "user-profile-page">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>

                  <MDBCardImage src={user.avatar}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{user.first_name} {user.last_name}</MDBTypography>
                  <MDBCardText>username: {user.username}</MDBCardText>
                  {/* MODAL FOR EDIT BUTTON */}
                  <UserProfileModalComponent
                    user={user}
                    setUser={setUser}
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Location</MDBTypography>
                        <MDBCardText className="text-muted">{user.zip_code}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Business Owner</MDBTypography>
                        <MDBCardText className="text-muted">{user.business_owner ? "Yes, I own a business!" : "Not a business owner"}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
    
  )
}

export default UserProfile