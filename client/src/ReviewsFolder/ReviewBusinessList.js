import React from 'react'
import ReviewBusinessCard from './ReviewBusinessCard'

const ReviewBusinessList = ({user, setUser}) => {

    const renderReviewCard = user.reviews?.map ((oneReview) => {
        return (
          <ReviewBusinessCard
           key={oneReview.id}
           comment={oneReview.comment}
           title={oneReview.title}
        //The id for the review
           id={oneReview.id}
           rating={oneReview.rating}
          user={user}
          setUser={setUser}
           />
        )
      })       
      
  return (
    <div>{renderReviewCard ? renderReviewCard : <h3> No review </h3> } </div>
  )
}

export default ReviewBusinessList