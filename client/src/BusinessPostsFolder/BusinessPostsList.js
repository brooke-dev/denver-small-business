import React from 'react'
import BusinessPostsCard from './BusinessPostsCard'
import './businessPostCSS.css'
import './reviewListCSS.css'

function BusinessPostsList({search, businessPosts, setUser, userId, setBusinessPosts}) {
    // Search Logic
    const filterBusinessPosts = businessPosts.filter((oneBusinessPostFilter) => {
      if (oneBusinessPostFilter.business_name.toLowerCase().includes(search.toLowerCase())){
        return true
      } else if (oneBusinessPostFilter.business_category.toLowerCase().includes(search.toLowerCase())){
        return true
      } else if (oneBusinessPostFilter.location.toLowerCase().includes(search.toLowerCase())){
        return true
      } else return false
    })


    const renderBusinessPostCard = filterBusinessPosts.map((oneBusinessPost)=>{
      return(
            <BusinessPostsCard 
                key={oneBusinessPost.id}
                id={oneBusinessPost.id}
                username={oneBusinessPost.user.username}
                businessName={oneBusinessPost.business_name}
                businessCategory={oneBusinessPost.business_category}
                location={oneBusinessPost.location}
                website={oneBusinessPost.website}
                favorites={oneBusinessPost.favorites}
                image={oneBusinessPost.image}
                myUserId={userId}
                reviews={oneBusinessPost.reviews}
                avatar={oneBusinessPost.user.avatar}
                reviewUsername={oneBusinessPost.user.username}
                setBusinessPosts={setBusinessPosts}
                setUser={setUser}
            />
        )
    })

  return (
    <div>{renderBusinessPostCard}</div>
  )
}

export default BusinessPostsList