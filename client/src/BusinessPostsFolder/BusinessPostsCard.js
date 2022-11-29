import React from 'react'


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
   
      {/* <div class="accordion" id="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              More Information
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <p className='businessUsername'><span>Created By: </span>{username}</p>
              <p>Favorites: {favorites}</p>
              <p>{website}</p>
              <p>Location: {location}</p>
            </div>
          </div>
        </div>
    </div> */}
  </div>
  )
}

export default BusinessPostsCard