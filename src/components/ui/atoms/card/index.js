import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
    return (
        <div className={`card ${props.extra_classes}`}>
             { props.children }
        </div>
    )
}

Card.prototype = {
    extra_classes: PropTypes.string,
    children: PropTypes.element
}
