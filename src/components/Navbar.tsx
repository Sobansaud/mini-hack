import React from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <header className='fixed z-10 lg:px-20 sm:px-10 px-5 h-16 w-full border-b font-main border-black flex items-center justify-between bg-[#E3EBF0]'>
        <h1 className='capitalize text-xl font-bold'>rizfan</h1>
        <ul className='h-full sm:flex hidden'>
            {["home", "about", "skill", "project", "contact"].map((val, ind) => (
                <li key={ind} className='md:px-4 px-3 capitalize opacity-80 md:text-nr text-sm flex items-center justify-center'>{val}</li>
            ))}
        </ul>
        <ResponsivNav/>
    </header>
  )
}

export default Navbar

const ResponsivNav = () => {
  return(
    <>
    <span className='h-8 w-8 sm:hidden flex bg-primary rounded-md items-center justify-center'>
      <MdOutlineMenuOpen className='h-4/5 w-4/5 text-white'/>
    </span>
    </>
  )
}