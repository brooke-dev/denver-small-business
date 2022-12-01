import React from 'react'
import ReviewBusinessCard from './ReviewBusinessCard'

const ReviewBusinessList = ({
  // reviews, 
  // setUpdateAfterDelete, 
  // setUpdateReviews,
  user,
  setUser
}) => {
  // console.log(reviews.reviews)
    const renderReviewCard = user.reviews?.map ((oneReview) => {
        return (
          <ReviewBusinessCard
           key={oneReview.id}
           comment={oneReview.comment}
           title={oneReview.title}
        //The id for the review
           id={oneReview.id}
           rating={oneReview.rating}
        //    image={oneReview.business_post?.image}
          //  setUpdateReviews={setUpdateReviews}
          //  setUpdateAfterDelete={setUpdateAfterDelete}
          user={user}
          setUser={setUser}
           />
        )
      })
      // const allReviews = () => {
      //   return (
      //     <ReviewBusinessCard reviews={reviews}/>
      //   )
      // }
       
      
  return (
    <div>{renderReviewCard ? renderReviewCard : <h3> No review </h3> } </div>
  //  <div>Hello</div>
  )
}

export default ReviewBusinessList