
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Separator } from './ui/separator'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { 
    name: "Student Educational Support", 
    url: "/services/student-educational-support", 
    description: "Providing scholarships, tutoring, and resources to underprivileged students to enhance their learning opportunities and reduce dropout rates." 
  },
  { 
    name: "Health Awareness & Medical Checkup", 
    url: "/services/health-awarness-and-support", 
    description: "Conducting awareness campaigns and free medical checkups to promote community health and prevent diseases among vulnerable populations." 
  },
  { 
    name: "Rural Development Program", 
    url: "/services/rural-development-program", 
    description: "Initiatives focused on improving infrastructure, education, and economic opportunities in rural areas for sustainable community growth." 
  },
  { 
    name: "Elderly Support Program", 
    url: "/services/elderly-support-program", 
    description: "Offering care services, medical aid, and social engagement activities to ensure dignified and supported living for the elderly." 
  },
  { 
    name: "Food Aid & Relief Campaign", 
    url: "/services/food-and-relief-campaign", 
    description: "Distributing essential food supplies and emergency relief to families in need during crises and for ongoing poverty alleviation efforts." 
  },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ease-in-out ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className='flex gap-2 items-center'>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="size-12 md:size-16 lg:size-18 bg-blue-900 rounded-full shadow-md shadow-gray-500 transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>

          <div className='hidden lg:block'>
            <h1 className='text-blue-900 text-xl font-bold'>VIDHYA MITRA PEOPLES HELPING TRUST</h1>
            <p className='text-sm text-blue-600 italic'>(Registered under Trust Act 1882)</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map((link) => {
            if (link.name === 'Services') {
              return (
                <li key={link.href} className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 text-sm">
                        Services <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-fit max-w-[500px] min-w-[280px] p-2">
                      <p className='text-xs text-center py-2 text-gray-500'>Services Provided by VPHT</p>
                      <Separator/>
                      {serviceLinks.map((s) => (
                        <DropdownMenuItem asChild key={s.url} className='p-0 my-1'>
                          <Link href={s.url} className="w-full block text-sm cursor-pointer py-2 px-3 group hover:bg-gray-50 transition-all duration-3s">
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-700 group-hover:text-blue-800">{s.name}</span>
                              {s.description ? <span className="text-xs text-gray-400 mt-1">{s.description}</span> : null}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuItem asChild>
                        <Link href="/services" className="w-full block text-sm text-blue-600 py-2 px-3 hover:bg-gray-50 transition-all duration-3s">All services</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            )
          })}

          <li>
            <Link
              href="/donate"
              className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          onClick={() => {
            setMobileOpen(!mobileOpen)
            if (mobileOpen) setMobileServicesOpen(false)
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 py-4 px-4">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  {link.name === 'Services' ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between font-medium text-gray-800 mb-2"
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : 'rotate-0'}`} />
                      </button>

                      {mobileServicesOpen && (
                        <ul className="pl-2 space-y-2">
                          <p className='text-sm text-gray-500 py-2'>Services Provided by VPHT</p>
                          <Separator/>
                          {serviceLinks.map(s => (
                            <li key={s.url}>
                              <Link
                                href={s.url}
                                className=" py-1 block text-gray-700 hover:text-blue-900 text-base flex justify-between"
                                onClick={() => {
                                  setMobileOpen(false)
                                  setMobileServicesOpen(false)
                                }}
                              >
                                {s.name} <ChevronRight className='size-5'/>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/services"
                              className="block text-blue-600 text-base"
                              onClick={() => {
                                setMobileOpen(false)
                                setMobileServicesOpen(false)
                              }}
                            >
                              All services
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar