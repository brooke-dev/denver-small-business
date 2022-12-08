import React , {useState} from 'react'
import ReviewModal from './ReviewModal'

const ReviewBusinessCard = ({user, setUser, comment,title,id,rating
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
    <h3>{title}</h3>
    <h3>⭐{rating}</h3>
    <h3>{comment}</h3>

    <ReviewModal user={user} setUser={setUser} handleDelete={handleDelete} id={id} />

  </div>
  )
}

export default ReviewBusinessCard