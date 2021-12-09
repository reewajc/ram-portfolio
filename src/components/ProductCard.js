import React from 'react'
import { Fragment } from 'react'

function ProductCard(props) {

    //write a function to display only three sentences of the description
    const description = (description) => {
        let sentences = description.split('.')
        let newDescription = []
        for (let i = 0; i < 3; i++) {
            newDescription.push(sentences[i])
        }
        return newDescription.join('.')
    }

    return (
        <Fragment >
           
            <div classNameName= "card col-lg-3" >
                <img className="card-img-top" style={{height:300, width:250, display:'block', marginLeft:'auto', marginRight:'auto', borderRadius:'25px'}} src={props.image} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">
                       {description(props.description)}
                    </p>
                    <a href="#" className="btn btn-primary">Buy</a>
                </div>
            </div>
           
        </Fragment>
    )
}

export default ProductCard
