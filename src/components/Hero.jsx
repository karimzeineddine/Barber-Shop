import React from 'react'
import Header from './header'
import '../App.css'
import img from "/images/hero.png"
import { Link } from 'react-router-dom'

function Hero() {
  return (
      <div className=' h-screen' style={{backgroundImage : "url(/images/black.png)"}}>
        <Header/>
        <div className=' flex flex-row items-center justify-between h-full text-white ' >
            <div className='w-[500px] pl-24 flex flex-col gap-5'>
            <p className='text-[#FBB034]'>Welcome To Choppers</p>
            <h1 className='text-4xl font-bold'>Best Hair Salon For A Professional Look</h1>
            <p className='w-2/3'>Choppers offers high performance customized facials to provide you with visible results</p>
            <div className='flex gap-10'>
              <Link to="/appointment">
            <button className='w-36 h-11 bg-[#FBB034]  text-black font-bold hover:bg-[#ff8818]'>Book Now</button>
              </Link>
              <a href='#services'>
            <button className='w-36 h-11 bg-transparent border border-solid border-white text-white font-bold hover:bg-black'>All Services</button>
              </a>
            </div>
            </div>
            <div className='h-full flex justify-end items-end '>
                <img src={img} className='flex justify-end items-end h-5/6'/>
            </div>
        </div>
    </div>
  )
}

export default Hero