import React from 'react'
import BusinessPostsCard from './BusinessPostsCard'

function BusinessPostsList({businessPosts, userId, setUpdateReviews}) {
  
    const renderBusinessPostCard = businessPosts.map((oneBusinessPost)=>{
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
                // Need to change serializer to have this show I think:
                reviewUsername={oneBusinessPost.user.username}
                setUpdateReviews={setUpdateReviews}
      
            />
        )
    })

  return (
    <div>{renderBusinessPostCard}</div>
  )
}

export default BusinessPostsList