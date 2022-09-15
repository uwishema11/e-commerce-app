import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants"
import axios from "axios";


export const listProducts= ()=> async (dispatch) =>{
   
    try{
     const products= await axios.get('/api/products');
     console.log(products)
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:products})
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL, payload:error})
    }
}  

export const datailsProduct =(productId) => async (dispatch)=>{

    try{
        const product = await axios.get(`/api/products/${productId}`)
    
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:product})
    }
    catch(error){
        console.log(error)
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.response && error.response.data.message ?
            error.response.data.message :error.message
        })
    }
}