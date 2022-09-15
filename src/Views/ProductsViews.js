 /* eslint-disable */

import React, { useEffect, useState } from "react";
import { Product } from "../Components/Product";
import {useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Redux/actions/productionAction";


function ProductsView() {

  const dipatch=useDispatch()
  const productList=useSelector((state)=> state.productList)
  const {products} =productList
 

  useEffect(()=>{
    dipatch(listProducts())

  },[])



  return (
  
    <div>
      <main>
        <div>
          <div className="row center">
          {products.data && products.data.map((item)=>(
            <Product
            key={item._id}
            {...item}
           
             />
          ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
   
  );
}

export default ProductsView;