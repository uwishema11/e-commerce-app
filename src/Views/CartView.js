 /*eslint-disable */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom";
import { addToCart } from "../Redux/actions/CartAction";

export const CartView =()=>{
    const {id}=useParams()
    const search =useLocation().search;
    const qty=new URLSearchParams(search).get('qty');
    const dispatch=useDispatch();

    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))
        }
    },[dispatch,id,qty])
   
    return (
        <div>
            <h1>CartView</h1>
            <p>Add to Cart :ProductId:{id} QTY:{qty}</p>
        </div>
    )
  
}