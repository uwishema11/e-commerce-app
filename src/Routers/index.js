import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsView from '../Views/ProductsViews'
import { ProductScreen } from '../Views/ProductView'
import { Homeview } from '../Views/HomeView'
import { CartView } from '../Views/CartView'


function AllRoutes() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Homeview />} />
          <Route path="/cart/:id" element={<CartView/>}/>
          <Route path="products" element={<ProductsView />} />
          <Route path="product/:id" element={<ProductScreen />} />
        
        </Routes>
      </div>
    )
  }
  export default AllRoutes
  