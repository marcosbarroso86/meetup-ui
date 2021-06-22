import React from 'react'
import { dateformater } from '../../../helpers/dateHandler'
import { Input } from '../atoms/input'
import { Text } from '../atoms/label/text'
import { Select } from '../atoms/select'
import { Submit } from '../atoms/submit'
export const MeetupForm = props => {

    return (
        <form onSubmit={ props.onSubmit }>
            <Input 
                placeholder={ "Título de la meetup" } 
                type={"text"} 
                name={ "title" }
                value={props.title}
                onChange={props.handleInputChange}/>
            <Input 
                type={"datetime-local"} 
                name={ "creationDate" }
                max={dateformater.sumtoDate(new Date() , 15)}
                min={dateformater.getDate()}
                value={props.creationDate}
                onChange={props.handleInputChange}/>
            <Input 
                placeholder={ "¿Cuantas personas asistirán?" } 
                type={"number"} 
                name={ "guests" }
                value={props.guests}
                onChange={props.handleInputChange}/>
            <div className="sidebar_beer_count">
                <Text text={`Necesitarás ${props.beerCrates} caja/s de birras`}/>
            </div>
            <Select 
                items={[ "Parque Patricios" , "Microcentro" ]}
                value={props.place}
                name={"place"}
                handleSelectChange={props.handleInputChange}/>   
            <Submit
                extra_classes={"btn-login btn-primary mt-5"} 
                text={"Crear Meetup"} />
        </form>
    )
}

