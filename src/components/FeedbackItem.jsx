import {useState} from 'react'
import { FaStar, FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card' 

function FeedbackItem({item, handleDelete}) {
  const n = 8;
  const rating = [];

  for (let i = 1; i <= item.rating; i++) {
    rating.push(<FaStar></FaStar>);
  }
  return (
    <Card>
        <div className="num-display">{rating} {item.rating} star</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='red'/>
        </button>
        <div className="text-name">{item.name}</div>
        <div className="text-feedback">{item.feedback}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem