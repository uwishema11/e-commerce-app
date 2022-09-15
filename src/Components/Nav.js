
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav =()=>{
    return(
    <div>
      <header className="row">
        <div>
          <Link className="brand" to="/">
            UCG
          </Link>
        </div>
        <div className='nav-bar'>
        <Link to='cart'>
        <li>Cart</li>
        </Link>
        <Link to='signin'>
        <li>Sign In</li>
        </Link>
        <Link to='products'>
        <li>Our products</li>
        </Link>
        </div>
      </header>
    </div>
    )
}