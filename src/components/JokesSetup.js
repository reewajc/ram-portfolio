import Button from '@restart/ui/esm/Button'
import React, { Fragment } from 'react'

function JokesSetup({setup, delivery, getAnotherJoke}) {



    return (
            <Fragment>
                <h1 className="text-light text-center">Jokes from Jokes API</h1>
            <p>
                <span className="d-block p-2 bg-primary text-white">{setup}</span>
            </p>
            <p>
                <span className="d-block p-2 bg-warning text-white">{delivery}</span>
            </p>

            <button onClick={getAnotherJoke} className="btn btn-primary btn-lg">Next Joke..</button> 
            </Fragment>
           
       
    )
}

export default JokesSetup
 