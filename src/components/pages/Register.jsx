import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { Title } from '../ui/atoms/title'
import { RegisterForm } from '../ui/molecules/RegisterForm'
import validator from 'validator'
import { createUser } from '../../redux/ducks/authDucks'
import { useHistory } from 'react-router-dom'
import { removeError, setError } from '../../redux/ducks/uiDucks'
import { INVALID_EMAIL, PASSWORDS_NOT_MATCH, PASSWORD_CHARACTERS_ERROR, VALID_PASSWORD_LENGTH } from '../../constants'
import { Text } from '../ui/atoms/label/text'

const Register = ({createUser, isAuthenticated, setError , removeError , messageError}) => {

    const history = useHistory()
    const [values , handleInputChange, reset] = useForm({email: '' , password: '' , confirmPassword: ''})
    const { email , password , confirmPassword } = values

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
        if (confirmPassword !== password) {
            setError(PASSWORDS_NOT_MATCH)
            return;
        }
        removeError();
        createUser(email, password)
        reset();
    }

    return (
        <div className="auth_form_container">
             <Title text={"Creá tu cuenta"}/>
             {messageError && <Text extra_classes={"forms__text_error"} text={messageError} /> }
            <RegisterForm 
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isLogged,
        messageError: state.ui.uiError
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        createUser: (email, password) => dispacth(createUser(email, password)),
        setError: (message) => dispacth(setError(message)),
        removeError: () => dispacth(removeError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
