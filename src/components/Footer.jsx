import React from 'react'
import {
    CheckIcon
} from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div>
        <div className='w-full mx-auto p-6 pt-8'>
            <h2 className='text-center font-bold text-3xl'>All-In-One Platform</h2>
            <p className='p-5 text-gray-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt accusantium reiciendis, accusamus ipsam animi corrupti voluptatem quis similique excepturi sunt nostrum</p>
            <div className='grid grid-cols-2 text-sm md:text-base md:grid-cols-3 gap-4 pb-6'>
                <div className='flex' >
                    <div>
                        <CheckIcon className='w-8 mx-2 my-1 text-green-400'/>
                    </div>
                    <div>
                        <h2 className='font-bold py-2'>Notifications</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus animi perferendis</p>
                    </div>
                </div>

                <div className='flex' >
                    <div>
                        <CheckIcon className='w-8 mx-2 my-1 text-green-400'/>
                    </div>
                    <div>
                        <h2 className='font-bold py-2'>Messages</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus animi perferendis</p>
                    </div>
                </div>

                <div className='flex' >
                    <div>
                        <CheckIcon className='w-8 mx-2 my-1 text-green-400'/>
                    </div>
                    <div>
                        <h2 className='font-bold py-2'>Emails</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus animi perferendis</p>
                    </div>
                </div>

                <div className='flex' >
                    <div>
                        <CheckIcon className='w-8 mx-2 my-1 text-green-400'/>
                    </div>
                    <div>
                        <h2 className='font-bold py-2'>Tracking</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus animi perferendis</p>
                    </div>
                </div>

                <div className='flex' >
                    <div>
                        <CheckIcon className='w-8 mx-2 my-1 text-green-400'/>
                    </div>
                    <div>
                        <h2 className='font-bold py-2'>Trading</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus animi perferendis</p>
                    </div>
                </div>

                <div className='flex' >
                    <div>
                        <CheckIcon className='w-8 mx-2 my-1 text-green-400'/>
                    </div>
                    <div>
                        <h2 className='font-bold py-2'>Volume</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus animi perferendis</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer