import React from 'react'
import BusinessPostsCard from './BusinessPostsCard'

function BusinessPostsList({businessPosts, user_id}) {

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
                my_user_id={user_id}
                // Need to change serializer to have this show I think:
                // username={oneBusinessPost.user.username}
            />
        )
    })

  return (
    <div>{renderBusinessPostCard}</div>
  )
}

export default BusinessPostsList