import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    let average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

    average = average.toFixed(1);

    if(average === 'NaN') {
        average = 0;
    }

    return (
    <div className="feedback-state">
        <h3>{feedback.length} Reviews</h3>
        <p>Average rating: {average}</p>
    </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats