import React, { useContext, useState } from 'react'
import './Header.css'
import { FaBitcoin } from 'react-icons/fa';
import { MainContext } from '../CreateContext';
const Header = () => {
    const { setLoginactive } = useContext(MainContext) 
  return (
    <>
        <header>
           <div className='HeaderRight'>
               <FaBitcoin className='Headerİcon' />
                <h2>
                    CRYPTO ŞAHİN
                </h2>
           </div>

           <div className='HeaderLeft'>
                <h2 className='NavBar active'>
                     ABOUT
                </h2>
                <h2 className='NavBar'>
                    PRICING
                </h2>
                <h2 className='NavBar'>
                    CONTACT US
                </h2>
                <h2 className='NavBar' onClick={(() => setLoginactive(true))}>
                    SIGN UP
                </h2>
           </div>
      </header>
    </>
  )
}

export default Header
