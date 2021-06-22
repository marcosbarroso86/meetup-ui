import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const Select = props => {
    return (
        <select className="a__select pointer" name={props.name} value={props.place} onChange={ props.handleSelectChange}>
            {
                props.items.map( ( item , index) => {
                    return <option key={index} value={item}>{item}</option>
                } )
            }
        </select>
    )
}

Select.prototype = {
    handleChange: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array
}
