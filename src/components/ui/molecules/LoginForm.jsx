import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../atoms/input'
import { Link } from 'react-router-dom'
import { Submit } from '../atoms/submit'

export const LoginForm = props => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <Input 
                placeholder={ "Email" } 
                type={"text"} 
                name={ "email" }
                value={props.email}
                onChange={props.handleInputChange}/>
            <Input 
                placeholder={ "password" } 
                type={"password"}
                name={"password"}
                value={props.password}
                onChange={props.handleInputChange}/>
           <Submit 
                extra_classes={"btn-login btn-primary mt-5"} 
                text={"Login"} />
            <Link className="link" to="/auth/register" >
                <span>No tengo cuenta</span> 
            </Link>
        </form>
    )
}

LoginForm.prototype = {
    handleSubmit: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}




