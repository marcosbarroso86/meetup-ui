import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import Image from '../components/ui/atoms/image'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth_box_container">
                <Image 
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/1200px-Banco_Santander_Logotipo.svg.png"}
                    extra_classes={"santander_logo mb-5"}/>
                <Switch>
                    <Route path="/auth/login">
                        <Login />
                    </Route>
                    <Route path="/auth/register">
                        <Register />
                    </Route>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
