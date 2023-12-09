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
import { IoIosLogIn } from "react-icons/io";


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

          <Link href='/' className='login menuOptions w-[7vw] h-[3vw] flex items-center justify-center text-white t-[3.2vw]'> Login <div className='w-[1.5vw] h-[4vw] flex justify-center items-center'> <IoIosLogIn /> </div> </Link>

          <div className="menuOptions flex lg:hidden">


            <div className="profile Button">

              <MdOutlineAccountCircle/>

            </div>

            <Link href='/' className='loginSm menuOptions w-[13vw] h-[3.5vw] mt-[0.7vw] flex items-center justify-center text-white t-[3.2vw]'> Login <div className='w-[5vw] h-[4vw] flex justify-center items-center'> <IoIosLogIn /> </div> </Link>

            <button className='burger Button' onClick={()=>{setMenuOpen(true)}}>

              <RxHamburgerMenu />
              {/* <span className="sr-only">Open Main Menu</span> */}

            </button>


          </div>

        </div>

        <div className='subNav '>

        {subMenuItems.map((item, index)=>
          (
            <button className='subButton text-[1.1vw] font-semibold rounded-[0.4vw] transition-all 0.2s ease-out hover:rounded-[0.9vw] text-white h-[5vw] m-[0.5vw] p-[0.5vw] '>
              <Link href={item.link} className='flex-row flex justify-evenly items-center'> <div className='w-[1.5vw]'>{item.icon}</div> <p className=''>{item.title}</p> </Link>
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

            <ul className='menuContent w-[100%] h-[100vh] text-[1.2vw] text-white'>

              {subMenuItems.map((item, index)=>
                (
                  <button className='navButton Button'>
                    <Link href={item.link}> {item.icon} <p className='btnText'>{item.title}</p> </Link>
                  </button>
                )
              )}

            </ul>

        </div>}

    </header>
  )
}

export default Header