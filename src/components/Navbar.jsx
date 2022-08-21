import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-gray-100 fixed drop-shadow-sm'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 pl-3 sm:text-4xl'>marketplace.io</h1>
                <ul className='hidden md:flex'>
                    <li className='px-2'><Link to="home" smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li className='px-2'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='px-2'><Link to="support" smooth={true} offset={-100} duration={500}>Support</Link></li>
                    <li className='px-2'><Link to="pricing" smooth={true} offset={-100} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button> 
                <button className='px-6 py-2'>Sign Up</button>

            </div>

            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' />}                
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 py-5 rounded-b-2xl'}> 
            <li className='border-b-2 border-zinc-300 w-full py-2'><Link onClick={handleClose} to="home" smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full py-2'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full py-2'><Link onClick={handleClose} to="support" smooth={true} offset={-100} duration={500}>Support</Link></li>
            <li><Link onClick={handleClose} to="pricing" smooth={true} offset={-100} duration={500}>Pricing</Link></li>
        </ul>

    </div>
  )
}

export default Navbar