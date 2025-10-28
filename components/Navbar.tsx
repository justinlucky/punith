'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

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
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href="/donate"
            className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
          >
            Donate
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 py-4 px-4">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 text-base"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                href="/donate"
                className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                Donate
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar