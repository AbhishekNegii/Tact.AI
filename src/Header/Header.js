import React from 'react'
import CartButton from '../Cart/CartButton'
import './Header.css'

const Header = () => {
  return (
    <div className='flex'>
        <h1>Shopping Cart</h1>
        <h2><CartButton/></h2>

    </div>
  )
}

export default Header