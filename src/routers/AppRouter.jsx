import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Dashboard from '../components/pages/Dashboard'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = ({isAuthenticated}) => {
    
    return (
        <Router>   
            <Switch>
                <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={isAuthenticated} /> 
                <PrivateRoute path="/" component={ Dashboard } isAuthenticated={isAuthenticated}/>
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isLogged
    }
}

export default connect(mapStateToProps)(AppRouter)
