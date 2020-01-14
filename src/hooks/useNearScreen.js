import { useState, useEffect, useRef } from 'react'

export function useNearScreen() {
    const element = useRef(null)

    const [show, setShow] = useState(false)


    useEffect(() => {

        //Dynamic import and Polyfill Intersection Observer
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined' ?
                IntersectionObserver
                : import('intersection-observer')
        ).then
            (() => {
                const observer = new IntersectionObserver(function (entries) {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        setShow(true)
                        observer.disconnect()
                    }
                })
                observer.observe(element.current)
            })
    }, [element])

    return [show, element]

}