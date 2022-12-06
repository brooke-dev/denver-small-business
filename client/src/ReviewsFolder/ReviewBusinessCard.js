import React , {useState} from 'react'
import ReviewModal from './ReviewModal'

// Finish this functionality with update and delete. 
const ReviewBusinessCard = ({user, setUser, comment,title,id,rating
  // setUpdateReviews,setUpdateAfterDelete
}) => {
  
  function handleDelete(){
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedUser = {...user, reviews: user.reviews.filter(review => review.id !== id)}
      setUser(updatedUser)
    })
  }

  return (
    <div className="review-card">
    <h3>title: {title}</h3>
    <h3>rating: {rating}</h3>
    <h3>comment: {comment}</h3>

    <ReviewModal user={user} setUser={setUser} handleDelete={handleDelete} id={id} />

  </div>
  )
}

export default ReviewBusinessCard