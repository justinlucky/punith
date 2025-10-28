import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Updates = () => {
  return (
    <div className='py-12 md:py-24 px-2'>
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
          <Image 
            src="https://images.unsplash.com/photo-1758315842590-25693965f805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85"  
            alt="Event 1" 
            width={192}
            height={192}
            className='w-48 bg-gray-100 h-48 object-cover'
          />
          <Image 
            src="https://images.unsplash.com/photo-1758315842590-25693965f805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85"  
            alt="Event 2" 
            width={192}
            height={192}
            className='w-48 bg-gray-100 h-48 object-cover'
          />
          <Image 
            src="https://images.unsplash.com/photo-1758315842590-25693965f805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85"  
            alt="Event 3" 
            width={192}
            height={192}
            className='w-48 bg-gray-100 h-48 object-cover'
          />
          <Image 
            src="https://images.unsplash.com/photo-1758315842590-25693965f805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85"  
            alt="Event 4" 
            width={192}
            height={192}
            className='w-48 bg-gray-100 h-48 object-cover'
          />
          <Image 
            src="https://images.unsplash.com/photo-1758315842590-25693965f805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85"  
            alt="Event 5" 
            width={192}
            height={192}
            className='w-48 bg-gray-100 h-48 object-cover'
          />
        </div>
        <div className='mt-12 text-center space-y-2'>
          <h3 className='text-xl font-semibold'>Be a part of our programs</h3>
          <p className='text-sm'>Join us in making a difference. Participate in our upcoming events and initiatives to support our cause.</p>
          <div className='flex flex-wrap items-center justify-center gap-4 mt-8'>
            <Link href="/" className=' py-2 px-4 rounded-md flex items-center gap-2 bg-gray-100 text-sm'>Sign up as volunteer <ChevronRight className='size-5'/></Link>
            <Link href="/" className=' py-2 px-4 rounded-md flex items-center gap-2 bg-gray-100 text-sm'>Sign up as volunteer <ChevronRight className='size-5'/></Link>
            <Link href="/" className=' py-2 px-4 rounded-md flex items-center gap-2 bg-gray-100 text-sm'>Sign up as volunteer <ChevronRight className='size-5'/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updates