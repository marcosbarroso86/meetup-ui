import { useState } from 'react'

export const useLocalStorage = (key , initialValue) => {
    
    const [storage, setStorage] = useState(() => {
        try {
            const item = JSON.parse(window.localStorage.getItem(key))
            return item ? setStorage(JSON.parse(item)) : initialValue
        } catch (error) {
            console.log(error)
        }
    })

    const setLocalStorage = (value) => {
        try {
            setStorage(value)
            window.localStorage.setItem( key , JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
    return [ storage , setLocalStorage ]
}
