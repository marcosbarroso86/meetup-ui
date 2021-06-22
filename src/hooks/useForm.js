import { useState } from 'react'

export const useForm = (initialState) => {

    const [value, setValue] = useState(initialState)

    const handleInputChange = ({target}) => {
        setValue({
            ...value,
            [target.name] : target.value
        })
    }

    const reset = () => {
        setValue(initialState)
    }

    return [ value , handleInputChange, reset ]
    
}


