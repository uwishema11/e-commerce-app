
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {datailsProduct} from "../Redux/actions/productionAction";
import { useNavigate } from "react-router-dom";
import { Rating } from "../Components/Rating";
import { Link, useParams } from 'react-router-dom';


export const ProductScreen =()=>{
    const navigate= useNavigate()
    const dispatch=useDispatch();
    const { id } = useParams();
    const[qty,setQty]=useState(1)
    const productDatails= useSelector ((state)=>state.productDatails)
    const {error,product}=productDatails
    
   useEffect(()=>{
    dispatch(datailsProduct(id));
   },[dispatch,id]);



   const addToCartHandler =()=>{
    navigate(`/cart/${id}?qty=${qty}`)
   }

    return (
        <div>
            {
              error ?<h1>{error}</h1> 
              :<div>
                   <Link to='/products'>Back to results</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src= { product.data &&product.data.image} alt={product.data &&product.data.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.data &&product.data.name}</h1>
                        </li>
                        <li>
                           { product.data &&< Rating  
                            rating={product.data.rating }
                            numReviews={product.data.numReviews}
                            />}
                        </li>
                        <li> price : ${ product.data &&product.data.price}</li>
                        <li>Description :
                            <p>{product.data &&product.data.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                             <div className="row">
                                <div>Price</div>
                                <div className="price">${product.data &&product.data.price}</div>
                             </div>
                            </li>
                            <li>
                             <div className="row">
                                <div>Status</div>
                                <div>
                                   {product.data &&product.data.countInStock >0 ?(
                                        <span className="success">In Stock</span>
                                    ):(
                                        <span className="error">Unvailbale</span>
                                    )}
                                </div>
                             </div>
                            </li>
                            {product.data &&product.data.countInStock >0 && (
                                <>
                                <li>
                                 <div className="row">
                                    <div>Qty</div>
                                    <div>
                                      <select value={qty} onChange={ e =>setQty(e.target.value)}>
                                      {
                                        [...Array(product.data.countInStock).keys()].map ((x,index) =>(
                                            <option key={index} value ={x+1}>{x+1}</option>
                                        ))
                                      }
                                      </select>
                                    </div>
                                 </div>
                                </li>
                                 <li>
                                <button
                                onClick={addToCartHandler}
                                 className="primary block">Add to card</button>
                               </li>
                                </>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </div>
              </div> 
            }
        </div>
    )
}