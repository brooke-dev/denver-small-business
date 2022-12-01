import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function BusinessPostsCard({id, reviews, setUpdateReviews, reviewUsername, businessName, businessCategory, location, website,favorites, image, myUserId, username}) {
  
  // //map through the comments
  const renderBusinessReviews = reviews?.map((review) => {
    return(
    <p className="comments" key={review.review.id}>+++ {review.review.comment} - {review.user.username}</p>
    )
  })

  // console.log(renderBusinessReviews)
  const noReviewsYet = 'Be the first to review!'
  const [errors, setErrors] = useState([]);
  const [comment, setComment] = useState("")
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const history = useHistory();

  // Form onchange:
  const handleComments = (e) => {
    setComment(e.target.value)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleRating = (e) => {
    setRating(e.target.value)
  }
  
  //POST REQUEST to submit new review
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const formData = {
      comment: comment,
      title: title,
      rating: rating,
      user_id: myUserId,
      business_post_id: id
    }
  // console.log(formData)

  fetch(`/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then((res) => {
    if (res.ok) {
      res.json().then((userData) => {
        history.push(`/`)
        setUpdateReviews(userData)
        setComment('')
        setTitle('')
        setRating('')
      });
    } else {
      res.json().then((err) => setErrors(err.errors))
    }
    })
  }

  //render errors to to display on page
  const formErrorMsg = errors.map((err) => (
    <p key={err}>{err}</p>
    ))


  return (
   
    <div className="businessPost-card business-card">
      <h3>{businessName}</h3>
      <h4>{businessCategory}</h4>
      <img src={image} alt={businessName} />
      <p className='businessUsername'><span>Created By: </span>{username}</p>
      <p>Favorites: {favorites}</p>
      <p>{website}</p>
      <p>Location: {location}</p>
      <div className="review-list">
        {renderBusinessReviews.length > 0 ? renderBusinessReviews : noReviewsYet}
      </div>
      

      <form className="review-form" onSubmit={handleCommentSubmit}>
      <h4>Add Review</h4>
        <div className="review-input">
          <textarea value={title} placeholder="Add a title..." onChange={handleTitle}></textarea>
          <input type= "number" id="rating" name="rating" min="0" max="5" placeholder="Add a rating 0-5" onChange={handleRating}></input>
          <textarea value={comment} placeholder="Add a comment..." onChange={handleComments}></textarea>
          <button className='submit-btn'>Submit</button>
        </div>
      </form>
      <ul>{formErrorMsg}</ul>
   

  </div>
  )
}

export default BusinessPostsCard