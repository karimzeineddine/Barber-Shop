import React from 'react'
import Logo from '/images/Logo1.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='flex flex-row justify-between items-center p-5 absolute w-full bg-transparent text-white px-32'>
        <div>
            <img src={Logo}/>
        </div>
        <div className='flex flex-row gap-10 items-center justify-center'>
            <a href='#'>Home</a>
            <a href='#services'>Services</a>
            <a href='#about'>About Us</a>
            <a href='#contact'>Contact</a>
            <Link to="/clients">
            <button className='w-28 h-10 bg-[#FBB034] ml-5 text-black font-bold hover:bg-[#ff8818] '>Admin</button>
            </Link>
        </div>
    </nav>
  )
}

export default Header