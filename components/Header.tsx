'use client'

import React, { useState } from 'react'
import '../Styles/header.css'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


    
  return (
    <header>
        
      <nav className='navBar'>

        <Link href="/" className="logo">
            <h1>Booking.com</h1>
        </Link>

        <div className="menuOptions flex lg:hidden">

          <button className='burgerButton' onClick={()=>{setMenuOpen(true)}}>

            <RxHamburgerMenu />
            <span className="sr-only">Open Main Menu</span>

          </button>

        </div>

      </nav>

    </header>
  )
}

export default Header