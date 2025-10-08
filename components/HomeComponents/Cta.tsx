import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const overlays = [
  "Google",
  "Facebook",
  "Twitter",
  "LinkedIn",
  "Instagram"
]

const Cta = () => {
  return (
    <div className='py-12 md:py-24 bg-gray-50 px-2 mt-12'>
      <div className='flex flex-col items-center text-center mb-8'>
        <h1 className='text-3xl font-semibold md:text-4xl xl:text-5xl'>Discover More about Us</h1>
        <p className='text-sm'>Description</p>
      </div>
      <div className='mt-12 flex flex-col gap-4 items-center justify-center'>
        <div className='flex flex-wrap gap-8 items-center justify-center'>
          {overlays.map((text, idx) => (
            <Link href="/" key={idx} className="relative group">
              <div className="relative w-[150px] h-[150px] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/"
                  alt={text}
                  width={150}
                  height={150}
                  className='object-contain grayscale group-hover:grayscale-0 transition-all duration-300 bg-blue-100 '
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-black bg-opacity-50">
                  <span className="text-white font-semibold text-lg">{text}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cta