import React from 'react'

const StatsAndAnalytics = () => {
  return (
    <div className='py-24 px-2'>
      <div>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center'>
          We believe in the power of collective action to create positive change in our communities and beyond.
        </h2>
      </div>
      <div className=' mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl'>1200+</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl'>1200+</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl'>98%</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl'>1200+</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h3 className='text-lg'>Content</h3>
          <p className='text-5xl font-extrabold md:text-6xl'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default StatsAndAnalytics