import axios from "axios";
import { MEETUPS_API_HOST , MEETUP_URI, BEER_MEETUP_URI } from "../../constants/index"
import { FETCH_BEER_CRATES, FETCH_MEETUPS_ERROR, FETCH_MEETUPS_SUCCESS, SAVE_MEETUP_ERROR, UPDATE_MEETUP_ERROR } from "../types";


const initialState = {
    data: [],
    msgError: null,
    msgSuccess: null,
    beerCrates: null
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEETUPS_SUCCESS:
            return { ...state, data: action.payload  } 
        case FETCH_MEETUPS_ERROR:
            return { ...state , msgError : action.payload }
        case SAVE_MEETUP_ERROR:
            return {...state , msgError: action.payload}
        case FETCH_BEER_CRATES:
            return {...state , beerCrates: action.beerCrates }
        case UPDATE_MEETUP_ERROR:
            return { ...state ,  msgError: action.payload }
        default: return state;
    }
}

const fetchMeetupsSuccessAction = payload => {
    return {
        type : FETCH_MEETUPS_SUCCESS,
        payload
    }
}

const fetchMeetupsErrorAction = message => {
    return {
        type: FETCH_MEETUPS_ERROR,
        payload: message
    }
}

const saveMeetupErrorAction = message => {
    return {
        type: SAVE_MEETUP_ERROR,
        payload: message
    }
}

const fetchBeerCratesSuccessAction = ({ beerCrates }) => {
    return {
        type: FETCH_BEER_CRATES,
        beerCrates
    }
}

const updateMeetupErrorAction = (message) => {
    return {
        type: UPDATE_MEETUP_ERROR,
        payload: message
    }
}

export const fetchMeetups = () => async (dispatch) => {
    try {
        const response = await axios.get( `${MEETUPS_API_HOST}${MEETUP_URI}`);
        dispatch(fetchMeetupsSuccessAction(response.data))
    } catch (error) {
        console.log(error)
        dispatch(fetchMeetupsErrorAction(error.message))       
    }
}


export const createMeetup = (meetup) => async (dispatch) => {
    try {
        await axios.post(`${MEETUPS_API_HOST}${MEETUP_URI}`, meetup)
        dispatch(fetchMeetups())
    } catch (error) {
        dispatch(saveMeetupErrorAction(error.message))
    }    
}

export const fetchBeerCrates = (temperature , persons) => async (dispatch) => {
    try {
        const response = await axios.post(`${MEETUPS_API_HOST}${BEER_MEETUP_URI}`, { temperature , persons })
        dispatch(fetchBeerCratesSuccessAction(response.data))
    } catch (error) {
       console.log(error.message) 
    }   
}

export const updateMeetup = (meetupID, users) => async (dispatch) => {
    try {
        await axios.put(`${MEETUPS_API_HOST}${MEETUP_URI}/${meetupID}` , users)
        dispatch(fetchMeetups());

    } catch (error) {
        dispatch(updateMeetupErrorAction(error.message))
    }
}

export default reducer