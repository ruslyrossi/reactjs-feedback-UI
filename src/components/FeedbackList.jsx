import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback, handleDelete}) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <h1>No feedback yet!</h1>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} 
        handleDelete={handleDelete} />
      ))}
      
    </div>
  )
}

FeedbackItem.PropTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackList