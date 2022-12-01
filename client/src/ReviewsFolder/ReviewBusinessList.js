import React from 'react'
import ReviewBusinessCard from './ReviewBusinessCard'

const ReviewBusinessList = ({reviews, setUpdateAfterDelete, setUpdateReviews}) => {
  // console.log(reviews.reviews)
    const renderReviewCard = reviews.reviews?.map ((oneReview) => {
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
    <div>{renderReviewCard ? renderReviewCard : <h3> No review </h3> }</div>
  //  <div>Hello</div>
  )
}

export default ReviewBusinessList