import React from 'react'
import {
    PhotographIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/backgroundd.png'

function Hero() {
  return (
    <div name='home' className='text-white w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start md:ml-5 w-full px-5 pt-36 md:py-8'>
                <p className='text-2xl'>Buy NFT's Now!</p>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Verifed Software</h1>
                <p className='text-2xl mb-3'>This is our brand</p>
                <button className='py-3 px-6 sm:w-[60%] hover:text-white'>Get Started</button>
            </div>
            <div className='pt-20'>
                <img className="w-full" src={bgImg} alt="/"/>
            </div>
            <div className='hidden lg:flex absolute flex-col py-8 bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 
            bg-white border border-state-300 rounded-xl text-center shadow-xl text-black'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-3'>
                    <p className='flex px-4 py-2'><PhotographIcon className='h-6 text-indigo-600' /> NFTs</p>
                    <p className='flex px-4 py-2'><DatabaseIcon className='h-6 text-indigo-600' /> Non-Fungible</p>
                    <p className='flex px-4 py-2'><ServerIcon className='h-6 text-indigo-600'/> Blockchain</p>
                    <p className='flex px-4 py-2'><PaperAirplaneIcon className='h-6 text-indigo-600'/> Ethereum</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero