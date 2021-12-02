import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'

function Header() {

   const [greet, setGreet] = useState('')

   const displayGreeting=()=>{
        var today = new Date();
        var hour = today.getHours();
        if (hour < 12) {
            setGreet("Good Morning");
        }
        else if (hour < 18) {
            setGreet("Good Afternoon");
        }
        else {
            setGreet("Good Evening");
        }
    }

    useEffect(()=>{
        displayGreeting();
    },[])

    return (
        <Fragment>
            <div className="jumbotron col-lg-11">
                <h1 id="ram"><span id="firstR">R</span>am Chapagai</h1>
                <span>{greet}</span>
                <div className="text-left text-success text-larger" id="greet"></div>
            </div>
        </Fragment>
    )
}

export default Header
