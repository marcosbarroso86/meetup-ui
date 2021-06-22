import React from 'react'
import { Card } from '../atoms/card'
import { Title } from '../atoms/title'
import { Text } from '../atoms/label/text'
import PropTypes from 'prop-types'

export const Weather = props => {
    return (
        <Card extra_classes={"sidebar__weather"}>
            <Title text={`${props.data.temp}°C`} />
            <div className="sidebar__weather_info">
                <Text text={props.data.location} />
                <Text text={`max ${props.data.max}° | min ${props.data.min}°`} />
            </div>
        </Card>
    )
}

Weather.prototype = {
    data: PropTypes.object
}


