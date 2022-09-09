import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header style={{ 
        backgroundColor: 'darkblue', 
        color: 'darkorange',
        padding: '10px',
    }}>
        <h1>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
    text: "header1"
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header