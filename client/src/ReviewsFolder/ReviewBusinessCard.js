import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import ReviewModal from './ReviewModal'


const ReviewBusinessCard = ({comment,title,id,rating,setUpdateReviews,setUpdateAfterDelete}) => {
  const [openModal, setOpenModal] = useState(false)

  function handleDelete(){
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    })
    .then(setUpdateAfterDelete)
  }

  //open/close modal
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="review-card plant-card">
    <h2>{title}</h2>
    <h3>{rating}</h3>
    <h3>{comment}</h3>

    <Link to={`/reviews/${id}`}>
    <button className= "edit-btn">Edit</button>
    </Link>

    <button className= "delete-btn" onClick={handleOpen}>X</button>

    <ReviewModal openModal={openModal} handleDelete={handleDelete} handleClose={handleClose}/>

  </div>
  )
}

export default ReviewBusinessCard