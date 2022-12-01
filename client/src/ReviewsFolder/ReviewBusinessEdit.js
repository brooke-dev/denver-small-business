import React from 'react'
// import { Link, useParams, useHistory } from 'react-router-dom'

const ReviewBusinessEdit = ({reviews, setUpdateReviews}) => {

  // const [updateReview, setUpdateReview] = useState("");
  // const [updated, setUpdated] = useState(false)
  // const [errors, setErrors] = useState([]);
  // const history = useHistory();


  // //renders the comment you want to edit
  // const review_id = useParams()
  // // console.log(review_id.id)
  // const placeholderComment =() => {
  //   let matchReview = reviews.find(review=> {
  //     if (review.id == review_id.id)
  //     return review
  //   })
  //   return matchReview.comment
  // }

  // //PATCH REQUEST to update review

  // function handleUpdate(e){
  //   e.preventDefault();
  //   fetch(`/reviews/${review_id.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       comment: updateReview
  //     }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((updateReview)=>{
  //         setUpdateReviews(updateReview)
  //       setUpdated(updated => !updated)
  //       });
  //     } else {
  //       res.json().then((err) => 
  //         setErrors(err.errors)
  //       );
  //     }
  //   })
  // }

  // const editMsgClassName = updated ? '' : 'hidden';

  // const formErrorMsg = errors.map((err) => (
  //   <p key={err}>{err}</p>
  // ))

  return (
    <div className="edit-page">
      {/* <form onSubmit={handleUpdate}>
      <h2>Editing Review</h2>
      <textarea
      placeholder={placeholderComment()}
        rows="4"
        value={updateReview}
        onChange={(e) => setUpdateReview(e.target.value)}
      />
    <br></br>
      <button className ="submit-btn"type="submit">Update Review</button>
    </form>
    <ul>{formErrorMsg}</ul>
      <div id="edit-complete-msg" className={editMsgClassName}>
            <h3>Edit complete!</h3>
            <Link to="/reviews">
              <button className='return-to-reviews'>View My Reviews
              </button>
            </Link>
      </div> */}
    </div>
  )
}

export default ReviewBusinessEdit