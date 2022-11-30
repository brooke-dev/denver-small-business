import React from 'react'
import ReviewBusinessList from './ReviewBusinessList'

const ReviewBusiness = (reviews, setUpdateReviews, setUpdateAfterDelete) => {
  return (
    <div className='page-container'>
      <h1>My Reviews</h1>
      <ReviewBusinessList reviews={reviews}
      setUpdateReviews={setUpdateReviews}
      setUpdateAfterDelete={setUpdateAfterDelete}/>
    </div>
  )
}

export default ReviewBusiness