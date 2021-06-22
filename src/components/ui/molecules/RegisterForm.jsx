import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../atoms/input'
import { Link } from 'react-router-dom'
import { Submit } from '../atoms/submit'

export const RegisterForm = props => {
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
            <Input 
                placeholder={ "Confirmar password" } 
                type={"password"}
                name={"confirmPassword"}
                value={props.confirmPassword}
                onChange={props.handleInputChange}/>
            <Submit
                extra_classes={"btn-login btn-primary mt-5"} 
                text={"Registrarse"} />
            <Link className="link" to="/auth/login" >
                <span>¿Ya tenés cuenta? Iniciá sesión </span> 
            </Link>
        </form>
    )
}

RegisterForm.prototype = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    handleSubmit: PropTypes.string.isRequired
}
