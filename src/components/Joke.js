import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import JokesSetup from './JokesSetup'


export default function Jokes() {
    const url = 'https://v2.jokeapi.dev/joke/Any'
    const [jokes, setJokes] = useState([])
    const [loading, setLoading] = useState(true)

    const getJokes = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setJokes(data)
        setLoading(false)
    }

    //Get jokes using fetch

    useEffect(() => {
        getJokes()
    }, [url])


    const getAnotherJoke = () => {
        return (
            getJokes()
        )
    }

    return (
        <Fragment>
            {loading ? <h1>Loading...</h1> :

                <JokesSetup setup={jokes.setup} delivery={jokes.delivery} getAnotherJoke={getAnotherJoke} />
            }
        </Fragment>



    )



}
