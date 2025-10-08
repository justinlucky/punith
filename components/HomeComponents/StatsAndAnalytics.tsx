import React from 'react'

const StatsAndAnalytics = () => {
  return (
    <div className='py-28 px-2 relative md:py-32'>
      <div className='h-28 w-2 bg-gray-800 absolute top-[-8] left-[50%] rounded-xl '/>
      <div className='h-28 w-2 bg-gray-800 absolute bottom-[-8] left-[50%] rounded-xl '/>
      <div>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center'>
          We believe in the power of collective action to create positive change in our communities and beyond.
        </h2>
      </div>
      <div className=' mt-12 flex flex-wrap items-center justify-center gap-12 md:gap-24 max-w-4xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl lg:text-7xl'>1200+</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl lg:text-7xl'>1200+</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl lg:text-7xl'>98%</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl lg:text-7xl'>1200+</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl lg:text-7xl'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default StatsAndAnalytics