import React , {useState} from 'react'
import ReviewModal from './ReviewModal'

// Finish this functionality with update and delete. 
const ReviewBusinessCard = ({comment,title,id,rating,setUpdateReviews,setUpdateAfterDelete}) => {
  const [openModal, setOpenModal] = useState(false)

  function handleDelete(){
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    })
    .then(setUpdateAfterDelete)
  }

  return (
    <div className="review-card plant-card">
    <h2>{title}</h2>
    <h3>{rating}</h3>
    <h3>{comment}</h3>

    <ReviewModal openModal={openModal} handleDelete={handleDelete} id={id}/>

  </div>
  )
}

export default ReviewBusinessCard