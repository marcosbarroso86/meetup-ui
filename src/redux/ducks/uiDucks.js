import { FINISH_LOADING, INIT_LOADING, SHOW_NOTIFICATION, HIDE_NOTIFICATION, SET_ERROR, REMOVE_ERROR } from "../types"

const initialState = {
    loading: false,
    notifications: false,
    message: null,
    uiError: null
}

const reducer = (state = initialState , action ) => {
    switch (action.type) {
        case INIT_LOADING:
            return { ...state , loading: true }
        case FINISH_LOADING:
            return { ...state , loading: false}
        case SHOW_NOTIFICATION:
            return { ...state , notifications: true , message: action.payload }
        case HIDE_NOTIFICATION:
            return { ...state , notifications: false}
        case SET_ERROR: 
            return {...state , uiError: action.payload}
        case REMOVE_ERROR: 
            return { ...state , uiError: null }
        default:
            return state
    }
}

export const initLoadingAction = () => {
    return {
        type : INIT_LOADING
    }
}

export const finishLoadingAction = () => {
    return {
        type : FINISH_LOADING
    }
}

export const showNotificationAction = (message) => {
    return {
        type: SHOW_NOTIFICATION,
        payload: message
    }
}

export const finishNotificationAction = () => {
    return {
        type: HIDE_NOTIFICATION
    }
}

export const setError = (message) => {
    return {
        type: SET_ERROR,
        payload: message

    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}






export default reducer