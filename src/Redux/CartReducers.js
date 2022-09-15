import { CART_ADD_ITEM } from "./Constants/CartConstant"

export const cartReducer =(state={cartItems:[]},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item=action.payload
            console.log(item.product)
            const existItem=state.cartItems.find(x =>x.product ===item.product)
            console.log(existItem)
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map((x) =>x.product===existItem.product?item:x
                     )
                }
            }else {
                // return {...state,cartItems: [...state.cartItems,item]}
                return{...state,cartItems:[...state.cartItems.concat(item)]}
            }
   
         default:
            return state 
    }
}