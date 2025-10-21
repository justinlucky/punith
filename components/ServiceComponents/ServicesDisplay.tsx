import React from 'react'
import Link from 'next/link'
import servicesData from '../../assets/docs/Services.json'

const ServicesDisplay: React.FC = () => {
  const services = servicesData.services || []
  const outcomes = servicesData.outcomes || []

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            We work across education, health, rural development, elderly support and food aid to empower communities.
          </p>
        </header>

        <div className="flex flex-wrap gap-8 ">
          {services.map((svc, idx) => {
            const img = svc.images?.[0]?.url || ''
            const svcOutcomes = outcomes.find((o: any) => o.category === svc.category)?.outcomes || []

            return (
              <article
                key={svc.category || idx}
                className=" max-w-[320px] mx-auto group bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-square bg-gray-100">
                  <img
                    src={img}
                    alt={svc.category}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="inline-block bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        {svc.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">{svc.category}</h3>
                  {svc.focus && <p className="text-sm italic text-gray-500 mt-1">{svc.focus}</p>}

                  {svc.description && (
                    <p className="text-sm text-gray-700 mt-3 flex-1">
                      {svc.description}
                    </p>
                  )}

                  {svcOutcomes.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Outcomes & indicators</h4>
                      <ul className="text-xs text-gray-600 space-y-2 max-h-40 overflow-auto pr-2">
                        {svcOutcomes.map((oc: any, i: number) => {
                          const label = oc.indicator || oc.metric || oc.title || `Outcome ${i + 1}`
                          const details = [
                            oc.target ? `Target: ${oc.target}` : null,
                            oc.timeline ? `Timeline: ${oc.timeline}` : null,
                            oc.baseline ? `Baseline: ${oc.baseline}` : null
                          ].filter(Boolean).join(' • ')
                          return (
                            <li key={i} className="flex flex-col">
                              <span className="font-medium">{label}</span>
                              {details && <span className="text-gray-500 mt-1">{details}</span>}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Learn more
                    </Link>

                    <span className="text-xs text-gray-400">{/* placeholder for meta */}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesDisplay