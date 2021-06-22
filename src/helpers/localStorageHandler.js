export const localStorageHandler = {

    setItem : (key , value) => {
        try {
            window.localStorage.setItem(key , JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    },

    getItem: (key) => {
        try {
            return JSON.parse(window.localStorage.getItem(key))
        } catch (error) {
            console.log(error)
        }
    },

    clear: (key) => {
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
    }
}