import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export const Input = props => {
    return (
        <input 
            className={`a__input ${props.extra_classes}`} 
            type={ props.type } 
            placeholder={props.placeholder} 
            value={props.value} 
            name={props.name} 
            autoComplete="off"
            max={props.max}
            min={props.min}
            onChange={props.onChange }/>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    extra_classes: PropTypes.string
}


