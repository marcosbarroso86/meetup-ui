import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export const Alert = props => {
    return (
        <div class="alert alert-danger" role="alert">
           { props.text }
        </div>
    )

}

Alert.protoTypes = {
    text: PropTypes.text
}