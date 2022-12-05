import React from 'react'
import BusinessPostsList from '../BusinessPostsFolder/BusinessPostsList'

function Home({errors, businessPosts, userId, user, setUser, setBusinessPosts}) {
  return (
    <div className='page-container business-page'>
        <BusinessPostsList 
            user={user}
            setUser={setUser}
            businessPosts={businessPosts}
            setBusinessPosts={setBusinessPosts}
            userId={userId}
        />

        <h3>
            {errors}
        </h3>
    </div>
  )
}

export default Home