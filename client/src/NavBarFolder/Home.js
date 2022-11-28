import React from 'react'
import BusinessPostsList from '../BusinessPostsFolder/BusinessPostsList'

function Home({errors, user, businessPosts, user_id}) {
  return (
    <div>
        <BusinessPostsList 
            user={user}
            businessPosts={businessPosts}
            // user_id={user.id}
        />

        <h3>
            {errors}
        </h3>
    </div>
  )
}

export default Home