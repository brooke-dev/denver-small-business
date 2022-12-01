import React from 'react'
import ReviewBusinessList from './ReviewBusinessList'

const ReviewBusiness = ({user, setUser}) => {
  return (
    <div className='page-container'>
      <h1>My Reviews</h1>
      <ReviewBusinessList 
      // reviews={reviews}
      // setUpdateReviews={setUpdateReviews}
      // setUpdateAfterDelete={setUpdateAfterDelete}
      user={user}
      setUser={setUser}
      />
    </div>
  )
}

export default ReviewBusiness