import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../../redux/ducks/authDucks'
import { Button } from '../atoms/button'
import Image from '../atoms/image'

const NavBar = ({logout}) => {

    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.replace("/auth/login")
    }

    return (
        <header className="navbar__main">
            <Image 
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/1200px-Banco_Santander_Logotipo.svg.png"}
                extra_classes={"santander_logo"}/>
            <div className="auth__logout">
                <Button 
                    text={"logout"}
                    handleOnClick={handleLogout}
                    extra_classes={"pointer"}
                />
            </div>
            
        </header>
    )
}


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)


