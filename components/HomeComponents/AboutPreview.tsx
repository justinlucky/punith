import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutPreview = () => {
    return (
        <div className='py-12 md:py-24 px-2 '>
            <div className='flex flex-col items-center text-center mb-8'>
                <h1 className='text-3xl font-semibold md:text-4xl xl:text-5xl'>What we are?</h1>
                <p className='text-sm'>Description</p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='w-full md:w-1/2 bg-gray-100 p-2 relative'>
                        <img src="./" alt="Service 1" className=' h-64 bg-blue-50 w-full'/>
                        <img src="./" alt="Service 2" className='absolute bg-blue-100 h-48 top-0 w-64 left-0'/>
                        <img src="./" alt="Service 3" className='absolute bg-blue-100 h-48 bottom-0 w-64 right-0'/>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2>Learn more about us</h2>
                        <p>Hello</p>
                        <Link href="/about" className='text-sm flex items-center gap-2 bg-gray-100 py-2 px-4 justify-between'>Read More <ChevronRight className='size-4'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPreview