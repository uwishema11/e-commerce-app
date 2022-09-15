import React from "react";
import { Rating } from "./Rating";
import { Link } from "react-router-dom";


export const Product =(props) =>{

    return(
        <div key={props._id} className="card">
              <Link to={`/product/${props._id}`}>
                <img
                  className="medium"
                  src={props.image}
                  alt={props.name}
                />
              </Link>
              <div className="card-body">
                <Link to={`/product/${props._id}`}>
                  <h2>{props.name}</h2>
                </Link>
                <span>
                <Rating rating={props.rating}  numReviews={props.numReviews}/>
                </span>
                <div className="price">${props.price} </div>
              </div>
            </div>
            )}
    
