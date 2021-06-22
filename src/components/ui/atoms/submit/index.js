import React from 'react'
import PropTypes from 'prop-types'

export const Submit = props => {
    return (
        <button type="submit" className={ `btn ${props.extra_classes}` }>{props.text}</button>
    )
}

Submit.propTypes = {
    text: PropTypes.string,
    extra_classes: PropTypes.string
}


