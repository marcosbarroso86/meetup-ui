import axios from 'axios';
import { USERS_URI , USERS_API_HOST, AUTHENTICATE_URI, USER_SESSION } from '../../constants';
import { AUTH_LOGIN, AUTH_LOGOUT } from "../types"
import { localStorageHandler } from "../../helpers/localStorageHandler"
import { showNotificationAction } from './uiDucks';

const sesion = localStorageHandler.getItem(USER_SESSION)

const initialState = sesion ? { isLogged: true , sesion} : { isLogged: false, sesion: null }

 const reducer = (state = initialState , action) => {
     switch (action.type) {
         case AUTH_LOGIN:
            return { isLogged: true , sesion: action.payload}
        case AUTH_LOGOUT:
            return  { isLogged : false }
         default:
             return state
     }
 }

 export const login = (payload) => {
     return {
         type: AUTH_LOGIN,
         payload
     }
 }

 export const logout = () => {
    localStorageHandler.clear(USER_SESSION)
    return {
        type: AUTH_LOGOUT
    }
 }

 export const createUser = (email , password) => async (dispacth) => {
    try {
        const response = await axios.post(`${USERS_API_HOST}${USERS_URI}`, { email , password })
        localStorageHandler.setItem(USER_SESSION , response.data)
        dispacth(login(response.data))
    } catch (error) {
        console.log(error)
        dispacth(showNotificationAction(error.message))
    }
 }

 export const authenticate = (email , password) => async (dispacth) => {
    try {
        const response = await axios.post(`${USERS_API_HOST}${AUTHENTICATE_URI}`, {email , password})
        localStorageHandler.setItem(USER_SESSION , response.data)
        dispacth(login(response.data))
    } catch (error) {
        console.log(error)
        dispacth(showNotificationAction(error.message))
    }
 }

 export default reducer;

 

