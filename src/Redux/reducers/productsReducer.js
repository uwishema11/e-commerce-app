
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants"


 export const productListReducer =(state ={products:[]},action)=>{
    console.log(state)
    switch(action.type){
        case PRODUCT_LIST_SUCCESS:
            return {...state,products:action.payload}
        case PRODUCT_LIST_FAIL:
            return{error:action.payload}    
        default:
           return state   
    }
}

export const productDetailsReducer = (state ={product:{}},action) =>{
    
    switch(action.type){
        case PRODUCT_DETAILS_SUCCESS:
            return{...state,product:action.payload}
        case PRODUCT_DETAILS_FAIL:
            return{error:action.payload}
        default:
            return state
    }
}