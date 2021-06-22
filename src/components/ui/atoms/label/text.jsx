import React from 'react'
import PropTypes from 'prop-types'

export const Text = props => {
    return (
        <label className={props.extra_classes}>{props.text}</label>
    )
}

Text.prototype = {
    text: PropTypes.string.isRequired,
    extra_classes: PropTypes.string

}


