import React from 'react'
import BusinessPostsCard from './BusinessPostsCard'
import './businessPostCSS.css'
import './reviewListCSS.css'

function BusinessPostsList({businessPosts, setUser, userId, setBusinessPosts}) {
  
    const renderBusinessPostCard = businessPosts.map((oneBusinessPost)=>{
      console.log(oneBusinessPost.user.avatar)
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
                // Need to change serializer to have this show I think:
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