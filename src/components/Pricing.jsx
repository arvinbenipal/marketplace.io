import React from 'react'
import {
    CheckIcon
} from '@heroicons/react/outline';


const Pricing = () => {
  return (
    <div name='pricing' className='p-8 pb-10 bg-slate-400'>
        <div className='w-full mx-auto'>
            <div className='py-4 text-center text-white'>
                <h2 className='font-bold text-3xl'>Pricing</h2>
                <p className='text-gray-200 py-3'>We have many different pricing options to choose from</p>
            </div>
            <div className='grid md:grid-cols-3 gap-5 pb-8'>
                <div className='bg-white rounded-3xl p-6'>
                    <span className='font-semibold text-white rounded-full px-5 py-1 bg-purple-400'>Level 1</span>
                    <h2 className='text-3xl font-bold py-2'>$49.99</h2>
                    <p className='pb-2 text-gray-500'>These are the features of Level 1 package</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Basic features</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Advanced data</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-white'/> Premium package</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-white'/> Unlimted Streams</p>
                    <div className='pt-3 text-right'>
                        <button className='p-1 bg-white text-black'>Select</button>
                    </div>
                    
                </div>
                <div className='bg-white rounded-3xl p-6'>
                    <span className='font-semibold text-white rounded-full px-5 py-1 bg-purple-400'>Level 2</span>
                    <h2 className='text-3xl font-bold py-2'>$69.99</h2>
                    <p className='pb-2 text-gray-500'>These are the features of Level 2 package</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Basic features</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Advanced data</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Premium package</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-white'/> Unlimted Streams</p>
                    <div className='pt-3 text-right'>
                        <button className='p-1 bg-white text-black'>Select</button>
                    </div>
                </div>
                <div className='bg-white rounded-3xl p-6'>
                    <span className='font-semibold text-white rounded-full px-5 py-1 bg-purple-400'>Level 3</span>
                    <h2 className='text-3xl font-bold py-2'>$99.99</h2>
                    <p className='pb-2 text-gray-500'>These are the features of Level 3 package</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Basic features</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Advanced data</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Premium package</p>
                    <p> <CheckIcon className='flex w-5 my-1 text-green-400'/> Unlimted Streams</p>
                    <div className='pt-3 text-right'>
                        <button className='p-1 bg-white text-black'>Select</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing