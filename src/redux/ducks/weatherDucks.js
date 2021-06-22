import { FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS } from "../types";
import axios from 'axios'
import { DATE_FORMAT_YYYY_MM_DD, WEATHER_API, WEATHER_URI } from "../../constants";
import { dateformater } from "../../helpers/dateHandler";

const initialState = {
   temp: '',
   max: '',
   min: '',
   location: '',
   msgError: ''
}



const reducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return { ...state , ...action.payload }
        case FETCH_WEATHER_ERROR:
            return {...state , msgError: action.msgError }
        default: return state;
            break;
    }
}


const fetchWeatherSuccessAction = (payload) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload
    }
}

const fetchWeatherErrorAction = (payload) => {
    return {
        type: FETCH_WEATHER_ERROR,
        msgError: payload
    }
}

export const fetchWeather = (date) => async (dispatch) => {
    try {
       const { data } = await axios.get(`${WEATHER_API}${WEATHER_URI}`, {
            headers: {
                'x-rapidapi-key': '432ebcef77msh360426f4598fdd9p1dfa7ajsnae2c4e13eae3',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
              }
        })
        const forecast = data.list;
        const aDate = dateformater.format(date , DATE_FORMAT_YYYY_MM_DD)
        const weather = forecast.find( weather => aDate === dateformater.timestampToDate(weather.dt) )
     
        const payload = {
            temp: Math.round(weather.temp.day), max: Math.round(weather.temp.max),
            min: Math.round(weather.temp.min), location: data.city.name
        }

        dispatch(fetchWeatherSuccessAction(payload))
    } catch (error) {
        console.log(error)
        dispatch(fetchWeatherErrorAction(error.message))
    }
}

export default reducer;