import React from 'react'
import PropTypes from 'prop-types'

export const Subtitle = props => {
    return (
       <h3>{props.text}</h3>
    )
}

Subtitle.prototype = {
    text: PropTypes.string.isRequired
}

