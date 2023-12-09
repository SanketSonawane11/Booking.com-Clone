'use client'

import React, { useState } from 'react'
import '../Styles/header.css'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { TbPlaneInflight } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import { IoCarSportOutline } from "react-icons/io5";
import { GiIndianPalace } from "react-icons/gi";
import { RiTaxiLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const subMenuItems = [
    {
      title: 'Stays',
      link: '/',
      icon: <IoBedOutline />,
    },
    {
      title: 'Flights',
      link: '/',
      icon: <TbPlaneInflight />,
    },
    {
      title: 'Flight + Hotel',
      link: '/',
      icon: <SiYourtraveldottv />,
    },
    {
      title: 'Car Rentals',
      link: '/',
      icon: <IoCarSportOutline />,
    },
    {
      title: 'Attractions',
      link: '/',
      icon: <GiIndianPalace />,
    },
    {
      title: 'Airport taxis',
      link: '/',
      icon: <RiTaxiLine />,
    }
  ];

    
  return (
    <header>
        
      <nav className='navBar'>

        <div className="firstNav">

          <Link href="/" className="logo">
              Booking.com
          </Link>

          <div className="menuOptions flex lg:hidden">


            <div className="profile Button">

              <MdOutlineAccountCircle/>

            </div>

            <button className='burger Button' onClick={()=>{setMenuOpen(true)}}>

              <RxHamburgerMenu />
              <span className="sr-only">Open Main Menu</span>

            </button>

          </div>

        </div>

        <div className='subNav'>

        {subMenuItems.map((item, index)=>
          (
            <button className='navButton Button'>
              <Link href={item.link}> {item.icon} <p className='btnText'>{item.title}</p> </Link>
            </button>
          )
        )}

        </div>

      </nav>

      {menuOpen && 
        <div className='menu'>

            <div className='menuHeader'> 
            
              <h3 className='w-[80%] text-center text-white font-semibold'>Menu</h3>
              <button className='Button' onClick={()=>{setMenuOpen(false)}}><IoClose /></button>
            
            </div>

        </div>}

    </header>
  )
}

export default Header