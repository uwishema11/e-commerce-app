import axios from "axios"
import { CART_ADD_ITEM } from "../Constants/CartConstant"

export const addToCart =(productId, qty) => async (dispatch,getState) =>{
    console.log(getState().cart.cartItems)
const {data}= await axios.get(`/api/products/${productId}`)
dispatch({
    type:CART_ADD_ITEM,
    payload:{
        name:data.name,
        image:data.image,
        price:data.price,
        countInStock:data.countInStock,
        product:data._id,
        qty,
    },
});

localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}