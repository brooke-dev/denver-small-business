import React from 'react'
import ReviewBusinessList from './ReviewBusinessList'
import './reviewPageCSS.css'

const ReviewBusiness = ({user, setUser}) => {
  return (
    <div className='page-container review-page'>
      <h1>My Reviews</h1>
      <ReviewBusinessList 
      user={user}
      setUser={setUser}
      />
    </div>
  )
}

export default ReviewBusiness