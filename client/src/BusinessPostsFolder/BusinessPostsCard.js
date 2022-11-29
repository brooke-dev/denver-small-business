import React from 'react'
// import { useHistory } from 'react-router-dom'

function BusinessPostsCard({id,businessName, businessCategory, location, website,favorites, image, my_user_id, username}) {
  return (
    <div className="businessPost-card business-card">
      <h3>{businessName}</h3>
      <h4>{businessCategory}</h4>
      <img src={image} alt={businessName} />
      <p className='businessUsername'><span>Created By: </span>{username}</p>
      <p>Favorites: {favorites}</p>
      <p>{website}</p>
      <p>Location: {location}</p>
  </div>
  )
}

export default BusinessPostsCard