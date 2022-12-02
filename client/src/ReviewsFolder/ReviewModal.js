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

const ReviewModal = ({id, handleDelete, user, setUser}) => {
   // Delete Modal State
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
  // Edit Modal State
    const [editModal, setEditModal] = useState(false)
    const toggleShowEdit = () => setEditModal(!editModal);
  // Edit Form State
    // const [updateReview, setUpdateReview] = useState("");
    const [updated, setUpdated] = useState(false)
    const [errors, setErrors] = useState([]);
    const [updateTitle, setUpdateTitle] = useState("")
    const [updateComment, setUpdateComment] = useState("")
    const [updateRating, setUpdateRating] = useState("")
  
    // Handles the values from review
    const handleUpdateTitle = (e) => {
      setUpdateTitle(e.target.value)
    }

    const handleUpdateComment = (e) => {
      setUpdateComment(e.target.value)
    }

    const handleUpdateRating = (e) => {
      setUpdateRating(e.target.value)
    }

  //PATCH REQUEST to update review
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = {
        title: updateTitle,
        rating: updateRating, 
        comment: updateComment,
  }
    
    fetch(`reviews/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      })
      .then(res => {
        if (res.ok) {
          res.json().then((updatedReview) => {
            const updatedUser = {...user, reviews: user.reviews.map(review => review.id !== updatedReview.id ? review : updatedReview)}
            setUser(updatedUser)
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
            <ul>{formErrorMsg}</ul>
              <div id="edit-complete-msg" className={editMsgClassName}>
                  <h3>Delete complete!</h3>
                  <Link to="/reviews">
                    <button className='return-to-reviews'>View My Reviews
                    </button>
                  </Link>
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

    <MDBBtn onClick={toggleShowEdit}>Edit</MDBBtn>
    <MDBModal show={editModal} setShow={setEditModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Edit</MDBModalTitle>
            <MDBBtn className='btn-close' color='black' onClick={toggleShowEdit}></MDBBtn>
          </MDBModalHeader>

          <MDBModalBody>
            <div className='update-review-form-container'>
                <form className="update-review-form" autoComplete='off' onSubmit={handleUpdateSubmit}>
                    <label>Title</label>
                    <input type='text'id="title" name="title" value={updateTitle} onChange={handleUpdateTitle} required/>

                    <label>Rating</label>
                    <input type='number'id="rating" name="rating" min="0" max="5" value={updateRating} onChange={handleUpdateRating} required/>

                    <label>Comment</label>
                    <input type='text'id="comment" name="comment" value={updateComment} onChange={handleUpdateComment} required/>
                    
                    <MDBBtn >Save changes</MDBBtn>
                    <ul>{formErrorMsg}</ul>
                    <div id="edit-complete-msg" className={editMsgClassName}>
                      <h3>Edit complete!</h3>
                      </div>
                </form>
            </div>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShowEdit}>
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