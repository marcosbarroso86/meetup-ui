import { Button } from 'bootstrap'
import React from 'react'
import { Input } from '../atoms/input'

export const Searcher = props => {
    return (
        <div className="searcher__container">
            <form onsubmit={ handleSubmit }  >
                <Input 
                    type={"text"} 
                    placeholder={"Buscar meetup"} 
                    name={"meetup"} />
                <Button 
                    type={"submit"} 
                    text={"Buscar"} />
            </form>
        </div>
    )
}
