import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import ram from '../images/ram.png'


function PictureCard() {


    const rampic = 'assets/images/ram.png'
    return (
        <Fragment >
            <div className="col-lg-6 col-sm-12">
            <div classNameName="card " >
                <img className="card-img-top" style={{height:400, width:300, display:'block', marginLeft:'auto', marginRight:'auto'}} src={ram} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Full Stack Java Developer</h5>
                    <p className="card-text">
                     
                        Nice to meet you! I'm a fullstack C# developer with a preference for frontend and backend.
                        I'm seeking full-time employment or contract work. I specialize in the ASP.NET MVC CORE,
                        Console, Windows Forms Application, and SQL. I believe my tireless desire to improve, innovate, and learn new technologies will make me a successful software developer.
                        Wanna hire me? Send an email, text, or call any time between 7AM and 5PM CST!
                       
                    
                    </p>
                    <a href="#" className="btn btn-primary">Hire Me..</a>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default PictureCard
