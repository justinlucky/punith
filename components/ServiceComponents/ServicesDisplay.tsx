
import React from 'react'
import Link from 'next/link'
import servicesData from '../../assets/docs/Services.json'

const ServicesDisplay: React.FC = () => {
  const services = servicesData.services || []

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            Lets together bring light unto the unpreviledged.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const href = svc.url || '/services'
            const category = svc.category || 'Service'
            const img = svc.images?.[0]?.url || ''

            return (
              <Link key={category + idx} href={href} className="group block">
                <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                    {img ? (
                      <img
                        src={img}
                        alt={category}
                        className="w-full h-full object-cover transform grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                    {svc.focus && <p className="text-sm italic text-gray-500 mt-1">{svc.focus}</p>}
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesDisplay