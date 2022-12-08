import React from 'react'
import BusinessPostsList from '../BusinessPostsFolder/BusinessPostsList'
import SearchComponent from './SearchComponent'

function Home({search, setSearch, errors, businessPosts, userId, user, setUser, setBusinessPosts}) {
  return (
    <div className='page-container business-page'>
        <SearchComponent search={search} setSearch={setSearch}/>
        <BusinessPostsList 
            user={user}
            setUser={setUser}
            businessPosts={businessPosts}
            setBusinessPosts={setBusinessPosts}
            userId={userId}
            search={search} 
        />

        <h3>
            {errors}
        </h3>
    </div>
  )
}

export default Home