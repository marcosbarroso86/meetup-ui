import React, { useEffect } from 'react'
import  { connect } from 'react-redux'
import { fetchMeetups, updateMeetup } from '../../../redux/ducks/meetupsDucks'
import { Meetup } from '../molecules/Meetup'
import { CHECK_MEETUP, USER_EXIST_MESSAGE, USER_SESSION } from '../../../constants/index'
import { ToastContainer, toast } from 'react-toastify';
import { localStorageHandler } from '../../../helpers/localStorageHandler'

const Meetups = ({meetups , fetchMeetups, updateMeetup}) => {
         
   const sesion = localStorageHandler.getItem(USER_SESSION);
    
   useEffect(() => { fetchMeetups() } , [])

    const handleOnClick = (meetup) => {
        meetup.checked = true;
        console.log(meetup)
        if (meetup.users) {
            const existUser = meetup.users.find( user => user === sesion.email)
            if(existUser) {
                toast(USER_EXIST_MESSAGE)
            } else {
                toast(CHECK_MEETUP)
                updateMeetup(meetup.id , { users: [...meetup.users , sesion.email]})
            }
        }
    }

    return (
        <article className="meetups_main">
            <ToastContainer />
            { meetups  && 
                meetups.map( meetup => 
                    (
                        <Meetup key={meetup.id}
                            title={meetup.title}
                            creationDate={meetup.creationDate}
                            guests={meetup.guests}
                            place={meetup.place}
                            weather={meetup.weather}
                            isChecked={meetup.checked}
                            handleOnClick={() => handleOnClick(meetup) } 
                        />
                    )
                )
            }
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        meetups : state.meetups.data
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      fetchMeetups: () => dispatch(fetchMeetups()),
      updateMeetup: (id , users) => dispatch(updateMeetup(id , users))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Meetups)
