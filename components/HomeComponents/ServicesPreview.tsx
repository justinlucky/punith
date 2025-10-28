import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import servicesData from '../../assets/docs/Services.json'

const ServicesPreview = () => {
  const services = servicesData.services || []

  return (
    <div className='bg-gray-50 mt-16 py-8 px-4 md:py-24'>
      <div className='flex flex-col items-center text-center mb-12 gap-4'>
        <h1 className='text-3xl font-semibold md:text-4xl xl:text-5xl'>What we do?</h1>
        <p className='text-sm'>We empowered people through education, health awareness, and self-reliance. Each child we help represents a new light of hope for the future — one that can lift an entire family and community.
        </p>
      </div>

      <div className='flex flex-col gap-12 px-2 md:px-4'>
        {services.map((svc, idx) => {
          const imgUrl = svc.images?.[0]?.url || ''
          return (
            <article
              key={svc.category || idx}
              className='flex flex-col md:flex-row-reverse gap-4'
            >
              <div className='w-full md:w-1/2 h-64 md:h-80 bg-blue-50 relative'>
                <Image
                  src={imgUrl}
                  alt={svc.category}
                  fill
                  className='object-cover'
                />
              </div>

              <div className=' w-full md:w-1/2 flex flex-col'>
                <h2 className='text-xl font-semibold pb-2'>{svc.category}</h2>
                {svc.focus && <p className='text-sm italic text-gray-500'>{svc.focus}</p>}
                {svc.description && <p className='text-sm text-gray-700 pt-4 flex-1'>{svc.description}</p>}

                <div className='mt-4'>
                  <Link href="/services" className='inline-block text-sm text-blue-600 hover:underline'>
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className='mt-12'>
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-2xl font-semibold'>Be a part of our community</h3>
          <p className='text-sm pt-2'>Together, let’s spread light through education and provide life through health.
            Let’s join hands to make a lasting difference — because helping others is the greatest form of humanity.
          </p>
        </div>
        <div className='flex gap-4 justify-center mt-6'>
          <Link href="/services" className='text-sm flex items-center gap-2 bg-gray-100 py-2 px-4 rounded'>See All Services</Link>
          <Link href="/donate" className='text-sm flex items-center gap-2 bg-gray-100 py-2 px-4 rounded'>Donate Now</Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesPreview