import Link from 'next/link'
import React from 'react'

const ServicesPreview = () => {
  return (
    <div className='bg-gray-50 mt-16 py-8 px-2 md:py-24'>
      <div className='flex flex-col items-center text-center mb-8'>
        <h1 className='text-3xl font-semibold md:text-4xl xl:text-5xl'>What we do?</h1>
        <p className='text-sm'>Description</p>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h2 className='text-xl md:text-2xl font-semibold'>Service 1 title</h2>
            <p className='text-sm italic text-gray-700 pt-2'>About Service 1</p>
            <p className='text-sm pt-4'>Detailed description about service 1</p>
          </div>
          <div>
            <img src="./" alt="Service 1" className='h-64 w-full bg-blue-50' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h2 className='text-xl md:text-2xl font-semibold'>Service 2 title</h2>
            <p className='text-sm italic text-gray-700 pt-2'>About Service 2</p>
            <p className='text-sm pt-4'>Detailed description about service 2</p>
          </div>
          <div>
            <img src="./" alt="Service 2" className='h-64 w-full bg-blue-50' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h2 className='text-xl md:text-2xl font-semibold'>Service 3 title</h2>
            <p className='text-sm italic text-gray-700 pt-2'>About Service 3</p>
            <p className='text-sm pt-4'>Detailed description about service 3</p>
          </div>
          <div>
            <img src="./" alt="Service 3" className='h-64 w-full bg-blue-50' />
          </div>
        </div>
      </div>
      <div className=' mt-8'>
        <div>
          <h3 className='text-2xl font-semibold'>Be a part of our community</h3>
          <p className='text-sm pt-2'>Description Here</p>
        </div>
        <div className='flex justify-start'>
          <Link href="/services" className='text-sm flex items-center gap-2 bg-gray-100 py-2 px-4 w-max mx-auto mt-8'>See All Services</Link>
          <Link href="/donate" className='text-sm flex items-center gap-2 bg-gray-100 py-2 px-4 w-max mx-auto mt-4'>Donate Now</Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesPreview