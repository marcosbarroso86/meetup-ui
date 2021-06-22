import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { authenticate } from '../../redux/ducks/authDucks'
import { Title } from '../ui/atoms/title'
import { Text } from '../ui/atoms/label/text'
import { LoginForm } from '../ui/molecules/LoginForm'
import validator from 'validator'
import { removeError, setError } from '../../redux/ducks/uiDucks'
import { INVALID_EMAIL, PASSWORD_CHARACTERS_ERROR, VALID_PASSWORD_LENGTH } from '../../constants'

const Login = ({authenticate , isAuthenticated , setError , removeError, messageError}) => {

    const history = useHistory();
    const [ values , handleInputChange, reset ] = useForm({    email: '' , password: '' })
    const { email , password } = values;
    
    useEffect(() => { isAuthenticated && history.replace("/")}, [isAuthenticated])
    useEffect(() => { removeError() }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validator.isEmail(email)) {
            setError(INVALID_EMAIL)
            return;
        }
        if (password.length < VALID_PASSWORD_LENGTH ) {
            setError(PASSWORD_CHARACTERS_ERROR)
            return;
        }
        removeError();
        reset();
        authenticate(email , password)
    }
    
    return (
        <div className="auth_form_container">          
        <Title text={"Bienvenido a Meetup"}/><p></p>
            {messageError && <Text extra_classes={"forms__text_error"} text={messageError} /> }
            
            <LoginForm
                email={email}
                password={password}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isLogged,
        messageError : state.ui.uiError
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        authenticate: (email , password) => dispacth(authenticate(email, password)),
        setError: (message) => dispacth(setError(message)),
        removeError: () => dispacth(removeError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
