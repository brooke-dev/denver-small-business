import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function BusinessPostsCard({id, reviews, setBusinessPosts, reviewUsername, businessName, businessCategory, location, website,favorites, image, myUserId, username, avatar}) {
  
  // //map through the comments
  const renderBusinessReviews = reviews?.map((review) => {
    return(
      <div className="comments">
        <div className="title-rating-box">
          <p key={review.review.title}> title: {review.review.title}</p>
          <p key={review.review.rating}> rating: {review.review.rating}</p>
        </div>
        <p key={review.review.id}> {review.review.comment} - {review.user.username}</p>
      </div>
    
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
      res.json().then((businessPost) => {
        history.push(`/`)
        setBusinessPosts((currentBusinessPosts) => currentBusinessPosts.map(oneBusinessPost => oneBusinessPost.id !== businessPost.id ? oneBusinessPost : businessPost))
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
      <p className='businessUsername' ><img src={avatar} alt={username}/></p>
      <p>❤️{favorites}</p>
      <p><a href={website}>Vist {businessName}'s website here!</a></p>
      <p><a href="http://maps.google.com/?q={location}">{location}</a></p>
      <div className="review-list">
        {renderBusinessReviews.length > 0 ? renderBusinessReviews : noReviewsYet}
      </div>
      <form className="review-form" onSubmit={handleCommentSubmit}>
      <h5>Add Review</h5>
        <div className="title-input">
          <textarea value={title} placeholder="Add a title..." onChange={handleTitle}></textarea>
        </div>
        <div className="review-input">
          <textarea value={comment} placeholder="Add a comment..." onChange={handleComments}></textarea>
        </div>
        <div className="rating-input">
          <input type= "number" id="rating" name="rating" min="0" max="5" placeholder="0-5" onChange={handleRating}></input>
          <button className='submit-btn'>Submit</button>
        </div>
      </form>
      <ul>{formErrorMsg}</ul>
   

  </div>
  )
}

export default BusinessPostsCard