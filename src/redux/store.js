import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import meetupsDucks from './ducks/meetupsDucks'
import weatherDucks from './ducks/weatherDucks'
import uiDucks from './ducks/uiDucks'
import authDucks from './ducks/authDucks'

const reducers = combineReducers({
    meetups: meetupsDucks,
    weather: weatherDucks,
    ui: uiDucks,
    auth: authDucks
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore( reducers , composeEnhancers(applyMiddleware(thunk)))