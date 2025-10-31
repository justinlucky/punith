
import Link from "next/link"
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className=" relative overflow-hidden w-full h-full max-w-7xl mx-auto py-8 px-2 md:px-4 lg:px-6">
      <div>
        <div className='flex flex-col gap-4'>
          <div className="py-4">
            <Link href="/" className="text-lg">
              <span className="font-semibold text-blue-800 text-2xl ">Vidhyamitra</span> People’s Helping Trust
            </Link>
          </div>
          <div>
            <div>
              <ul className='font-bold text-sm flex gap-2 md:gap-4 lg:gap-8 flex-col sm:flex-row'>
                <li>About us</li>
                <li>Our Imapacts</li>
                <li>Resources</li>
                <li>Contact</li>
                <li>F.A.Q</li>
              </ul>
            </div>
            <div className='grid py-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 space-x-12'>
              <div>
                <p className='text-sm font-semibold'>Partners</p>
                <ul className='text-sm text-gray-700 mt-3 gap-2 flex flex-col'>
                  <li>Child Guidance Centre</li>
                  <li>Community & Rural Development Society</li>
                  <li>AASHA JYOTHI Welfare Association for Disability</li>
                  <li>Pavani Special School</li>
                </ul>
              </div>
              <div>
                <p className='text-sm font-semibold'>Programs</p>
                <ul className='text-sm text-gray-700 mt-3 gap-2 flex flex-col'>
                  <li>Education</li>
                  <li>Medical campaigns</li>
                  <li>Supporting the disabled</li>
                  <li>Mission to India</li>
                  <li>Act for Child Protection</li>
                  <li>Disaster Relief</li>
                  <li>Naturing Playtime</li>
                </ul>
              </div>
              <div>
                <p className='text-sm font-semibold'>Quick Links</p>
                <ul className='text-sm text-gray-700 mt-3 gap-2 flex flex-col'>
                  <li>Stayed informed</li>
                  <li>How to get involved</li>
                  <li>Financial reports</li>
                  <li>Media</li>
                  <li>Brochures</li>
                </ul>
              </div>
              <div>
                <p className='text-sm font-semibold'>Get the latest updates about ChildrenLeftBehind's new updates and programs.</p>
                <div className='w-full flex flex-col gap-2 py-4'>
                  <Input type='email' placeholder='Enter Your Email...' className="text-sm" />
                  <Button className='w-full bg-blue-700 text-white text-xs hover:bg-blue-800 hover:shadow-md'>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <Separator />
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div>
              <ul className="flex gap-4 flex-wrap text-sm text-gray-500">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-500">2025 ChildrenLeftBehind. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-xs text-gray-500">Designed with ❤️ by Lungchuingam</p>
        </div>
      </div>
    </div>
  )
}

export default Footer