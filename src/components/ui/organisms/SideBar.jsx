import React, { useEffect } from 'react'
import { Card } from '../atoms/card'
import { MeetupForm } from '../molecules/MeetupForm'
import { Weather } from '../molecules/Weather'
import { connect } from 'react-redux'
import { fetchWeather } from '../../../redux/ducks/weatherDucks'
import { useForm } from '../../../hooks/useForm'
import { dateformater } from '../../../helpers/dateHandler'
import { fetchBeerCrates } from '../../../redux/ducks/meetupsDucks'
import { createMeetup } from '../../../redux/ducks/meetupsDucks'
import validator from 'validator'
import { removeError, setError } from '../../../redux/ducks/uiDucks'
import { ADMIN_USER, INVALIDA_TITLE, SAVE_MEETUP_MESSAGE } from '../../../constants'
import { toast, ToastContainer } from 'react-toastify'

const SideBar = ({
  weather, beerCrates , fetchWeather, createMeetup , fetchBeerCrates, setError, removeError, sesion
}) => {

    const [values , handleInputChange, reset ] = useForm({
        title: '' , creationDate: dateformater.getDate() , guests: '' , place: 'Parque Patricios' , beerCrates: ''
    })

    const { title, creationDate, guests, place } = values;

    useEffect(() => { fetchWeather(creationDate)}, [creationDate]) 
    useEffect(() => { fetchBeerCrates( weather.temp, guests)  } , [guests])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validator.isEmpty(title)){
            setError(INVALIDA_TITLE)
            return 
        }

        createMeetup({...values , beerCrates , weather : weather.temp , users: []})
        removeError()
        reset();
        toast(SAVE_MEETUP_MESSAGE)
    }
    
    return (
        <aside className="sidebar__main">
            <ToastContainer />
            <Weather data={weather} />

            {
                sesion.email === ADMIN_USER &&

                <Card extra_classes={"sidebar__new_meetup"}>
                    <MeetupForm 
                        onSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        title={title}
                        creationDate={creationDate}
                        guests={guests}
                        place={place}
                        beerCrates={beerCrates}
                    />
                </Card>
            }
        </aside>
    )
}

const mapStateToProps = (state) => {  
    return { 
        weather : state.weather,
        beerCrates: state.meetups.beerCrates,
        messageError: state.ui.uiError,
        sesion: state.auth.sesion
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (creationDate) => dispatch(fetchWeather(creationDate)),
        createMeetup: (values) => dispatch(createMeetup(values)),
        fetchBeerCrates: (temperature, persons) => dispatch(fetchBeerCrates(temperature , persons)),
        setError: (message) => dispatch(setError(message)),
        removeError: () => dispatch(removeError()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)


