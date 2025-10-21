
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 px-2 bg-white py-2'>
      <div className=''>
        <Link href="/">
          <Image src="/Logo.png" alt="Logo" width={120} height={40} className='size-18 md:size-28 bg-blue-900 rounded-full shadow-md shadow-gray-500'/>
        </Link>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Navbar