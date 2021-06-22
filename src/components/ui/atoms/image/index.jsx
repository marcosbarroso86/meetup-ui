import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Image = props => {
    return (
        <img className={ props.extra_classes } src={props.src}  alt={props.alt} />
    )
}



Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
    extra_classes: PropTypes.string
}

export default Image;
