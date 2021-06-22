import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

export const Toast = props => {
    return (
        <div  className={ `toast align-items-center text-white bg-primary border-0 ${ props.type ? props.type : 'success'}` } role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    { props.text }
                </div>
                <Button extra_classes={"btn-close btn-close-white me-2 m-auto"} />
            </div>
        </div>
    )
}

Toast.prototype = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
}
