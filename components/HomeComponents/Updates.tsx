import React from 'react'

const Updates = () => {
  return (
    <div className='py-12 px-2'>
      <div className='flex text-center flex-col'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>Latest Updates</h2>
        <p className=' text-sm mb-4'>Stay informed with our recent news and events</p>
      </div>
      <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
        <div className='md:w-3/4 w-full bg-blue-200 h-64 md:h-80 flex items-center justify-center'>Recent Event Image</div>
        <div className='bg-gray-100 w-full md:w-1/4'>Events Date</div>
      </div>
      <div className='mt-8'>
        <div className='flex flex-wrap gap-8 items-center justify-center'>
          <img src="./" alt="Event 1" className='w-48 bg-gray-100 h-48'/>
          <img src="./" alt="Event 2" className='w-48 bg-gray-100 h-48'/>
          <img src="./" alt="Event 3" className='w-48 bg-gray-100 h-48'/>
          <img src="./" alt="Event 4" className='w-48 bg-gray-100 h-48'/>
          <img src="./" alt="Event 5" className='w-48 bg-gray-100 h-48'/>
        </div>
        <div className='mt-12'>
          <h3 className='text-xl font-semibold'>Be a part of our programs</h3>
        </div>
      </div>
    </div>
  )
}

export default Updates