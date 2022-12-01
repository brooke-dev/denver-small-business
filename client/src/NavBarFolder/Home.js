import React from 'react'
import BusinessPostsList from '../BusinessPostsFolder/BusinessPostsList'

function Home({errors, user, businessPosts, userId, setUpdateReviews}) {
  return (
    <div>
        <BusinessPostsList 
            user={user}
            businessPosts={businessPosts}
            setUpdateReviews={setUpdateReviews}
            userId={userId}
        />

        <h3>
            {errors}
        </h3>
    </div>
  )
}

export default Home