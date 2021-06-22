import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export const Button = props => {
    return (
        <button  type={ props.type } className={ `btn ${props.extra_classes}` } onClick={() => props.handleOnClick()}>{props.text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    extra_classes: PropTypes.string,
    type: PropTypes.string

}


