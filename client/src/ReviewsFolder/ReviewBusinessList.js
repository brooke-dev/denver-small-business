import React from 'react'
import ReviewBusinessCard from './ReviewBusinessCard'

const ReviewBusinessList = ({reviews, setUpdateReviews, setUpdateAfterDelete}) => {
  
    const renderReviewCard = reviews.map ((oneReview) => {
        return (
          <ReviewBusinessCard
           key={oneReview.id}
           comment={oneReview.comment}
           title={oneReview.title}
        //The id for the review
           id={oneReview.id}
           rating={oneReview.rating}
        //    image={oneReview.business_post?.image}
           setUpdateReviews={setUpdateReviews}
           setUpdateAfterDelete={setUpdateAfterDelete}/>
        )
      })
  return (
    <div>{renderReviewCard}</div>
  )
}

export default ReviewBusinessList