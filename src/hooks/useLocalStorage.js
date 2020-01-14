import { useState } from 'react'


export function useLocalStorage(key, initialValue) {

    const [storedValue, setValue] = useState(() => {
        // Save the key 
        try {
            const item = localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })


    const setLocalStorage = value => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (e) {
            console.error(e);
        }
    }
    // Devolver un array, valor que teniamos guardado, una forma de actualizar el localstorage
    return [storedValue, setLocalStorage]

}
