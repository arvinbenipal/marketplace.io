import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'
const Realfooter = () => {
  return (
    <div className='bg-slate-800 text-white p-6 pb-10'>
        <div className='grid grid-cols-2 md:grid-cols-6 border-b py-3'>
            <div>
                <h6 className='pl-1 font-bold text-sm pt-4'>SOLUTIONS</h6>
                <ul className='text-sm'>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Data</li>
                    <li>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='pl-1 font-bold text-sm pt-4'>SUPPORT</h6>
                <ul className='text-sm'>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>Api</li>
                </ul>
            </div>
            <div>
                <h6 className='pl-1 font-bold text-sm pt-4'>COMPANY</h6>
                <ul className='text-sm'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <h6 className='pl-1 font-bold text-sm pt-4'>LEGAL</h6>
                <ul className='text-sm'>
                    <li>Claims</li>
                    <li>Policies</li>
                    <li>Terms</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2'>
                <h6 className='font-bold text-sm pt-4'>Subscribe to our Newsletter</h6>
                <p className='text-sm pt-1 pb-4'>The latest news, articles, and resources sent directly to your inbox</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 mb-2 rounded-lg text-black' type="email" placeholder='Enter Email'/>
                    <button className='p-2 px-3 mb-2'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex py-3 justify-between text-sm text-gray-400'>
            <p>2022 Arvin Benipal. All rights reserved.</p>
            <div className='flex justify-between'>
                <FaFacebook className='mx-1'/>
                <FaGithub className='mx-1'/>
                <FaInstagram className='mx-1'/>
                <FaTwitter className='mx-1'/>
            </div>
        </div>
    </div>
  )
}

export default Realfooter