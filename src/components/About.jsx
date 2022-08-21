import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32 px-3'>
        <div className='max-w-[800px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Trusted by Developers across the globe</h2>
                <p className='text-xl py-5 text-gray-500'> This is a website made in react js using tailwind css and HTML. This website is all about NFTs and the future</p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 px-2 text-center'>
                <div className='bg-gray-100 py-4 rounded-xl shadow-md'>
                    <p className='font-bold text-4xl text-orange-400'>100%</p>
                    <p className='text-gray-700 mt-2'>Completion</p>
                </div>
                <div className='bg-gray-100 py-4 rounded-xl shadow-md'>
                    <p className='font-bold text-4xl text-orange-400'>24/7</p>
                    <p className='text-gray-700 mt-2'>Delivery</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-xl shadow-md'>
                    <p className='font-bold text-4xl text-orange-400'>100k</p>
                    <p className='text-gray-700 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About