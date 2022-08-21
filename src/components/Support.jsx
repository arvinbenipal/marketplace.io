import React from 'react'
import{
    PhoneIcon
} from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

const Support = () => {
  return (
    <div name='support' className='w-full mx-auto bg-gray-100 py-4 p-6'>
        <div className='max-w-[1000px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl pt-4 text-gray-400'>Support</h2>
                <p className='text-3xl font-bold py-5'>Finding the right team</p>
                <p className='pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni necessitatibus placeat obcaecati id, odio assumenda cumque repudiandae.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 pb-6'>
                <div className='bg-white p-4 pb-6 m-4 rounded-xl'>
                    <div className=''>
                        <PhoneIcon className='w-10 p-2 bg-indigo-300 rounded-lg mt-[-2rem]'/>
                        <h2 className='text-xl font-bold pt-3'>Sales</h2>
                        <p className='py-2 text-gray-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni necessitatibus placeat obcaecati id</p>
                        <div>
                            <button className='p-1 px-5'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 pb-6 m-4 rounded-xl '>
                    <div className=''>
                        <ChipIcon className='w-10 p-2 bg-indigo-300 rounded-lg mt-[-2rem]'/>
                        <h2 className='text-xl font-bold pt-3'>Tech Support</h2>
                        <p className='py-2 text-gray-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni necessitatibus placeat obcaecati id</p>
                        <div>
                            <button className='p-1 px-5'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 pb-6 m-4 rounded-xl '>
                    <div className=''>
                        <SupportIcon className='w-10 p-2 bg-indigo-300 rounded-lg mt-[-2rem]'/>
                        <h2 className='text-xl font-bold pt-3'>Media Inquiries</h2>
                        <p className='py-2 text-gray-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni necessitatibus placeat obcaecati id</p>
                        <div>
                            <button className='p-1 px-5'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support