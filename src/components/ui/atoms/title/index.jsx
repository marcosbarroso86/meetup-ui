import React from 'react'
import PropTypes from 'prop-types'

export const Title = props => {
    return (
        <h1>{props.text}</h1>
    )
}

Title.prototype = {
    text: PropTypes.string.isRequired
}
