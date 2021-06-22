
import React from 'react'
import { Card } from '../atoms/card'
import Image from '../atoms/image'
import { Subtitle } from '../atoms/subtitle'
import { Button } from '../atoms/button'
import PropTypes from 'prop-types'
import { dateformater } from '../../../helpers/dateHandler'
import { DATE_FORMAT_YYYY_MM_DD_WITH_TIME_SIMPLE } from '../../../constants/index'

export const Meetup = props => {
    
    return (
        <Card extra_classes={"meetup__container"}>
            <Image 
                src={"https://i.pinimg.com/736x/78/2a/cf/782acf16d5be9a3236aad18176808df4.jpg"}
                extra_classes={"meetup__image"}
            />
            <div className="meetup__body">
                <Subtitle text={props.title} />
                <p> <strong>Fecha y Hora: </strong>{ dateformater.format(props.creationDate, DATE_FORMAT_YYYY_MM_DD_WITH_TIME_SIMPLE )}</p>
                <p><strong>Lugar: </strong>{props.place}</p>
                <p><strong>Invitados: </strong>{props.guests}</p>
                <p><strong>Temperatura Pronosticada: </strong>{props.weather}°C</p>
            </div>
            <div className="meetup__footer">
                    <Button 
                    type={"button"}
                    text={ "Asistir" }
                    handleOnClick={props.handleOnClick}
                />
            </div>
        </Card>
    )
}

Meetup.prototype = {
    title: PropTypes.string,
    creationDate : PropTypes.string,
    guests: PropTypes.number,
    place: PropTypes.string
}
