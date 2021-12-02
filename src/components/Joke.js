import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import JokesSetup from './JokesSetup'


export default function Jokes() {
     const url = 'https://v2.jokeapi.dev/joke/Any'
    const [jokes, setJokes] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchJokes = async () => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setJokes(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchJokes()
    }, [url])
    

    const getAnotherJoke = async () =>{
        return(
           await fetchJokes()
        )
    }
 
    return (
        <div className="container-fluid fill-window">
            {loading ? <h1>Loading...</h1> :

                <JokesSetup setup={jokes.setup} delivery={jokes.delivery} getAnotherJoke={getAnotherJoke} />

            }

        </div>
    )



}
