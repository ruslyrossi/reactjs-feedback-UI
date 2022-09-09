import PropTypes from 'prop-types'

function Card({children, reverse}) {
   return (
        <div className='card' style={
            {
                backgroundColor: reverse ? 'red' : 'black',
                color: reverse ? 'white' : 'white'
            }
        }>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card