import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutPreview = () => {
    return (
        <div className='py-12 md:py-24 px-2'>
            <div className='flex flex-col items-center text-center mb-8'>
                <h1 className='text-3xl font-semibold md:text-4xl xl:text-5xl'>What we are?</h1>
                <p className='text-sm'>Description</p>
            </div>
            <div>
                <div className='flex flex-col md:flex-row gap-2 lg:gap-8'>
                    <div className='w-full lg:w-1/2 relative mt-12'>
                        <img 
                            src="https://images.unsplash.com/photo-1758315842590-25693965f805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85" 
                            alt="Service 1" 
                            className='h-64 md:h-80 lg:h-96 xl:h-[500px] bg-blue-50 w-full object-cover rounded-lg shadow-lg' 
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1760029012684-7cc3800aba71?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85" 
                            alt="Service 2" 
                            className='absolute bg-blue-100 h-48 md:h-64 lg:h-72 xl:h-80 w-48 md:w-64 lg:w-72 xl:w-80 top-[-40px] md:top-[-60px] lg:top-[-80px] left-[-10px] md:left-[-20px] object-cover rounded-lg shadow-lg z-10' 
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1757581559818-4509f9ce110c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjEwNzcxOTd8&ixlib=rb-4.1.0&q=85" 
                            alt="Service 3" 
                            className='absolute bg-blue-100 h-32 md:h-48 lg:h-64 xl:h-72 w-48 md:w-64 lg:w-72 xl:w-80 bottom-[-10px] md:bottom-[80px] lg:bottom-[-40px] right-[-10px] md:right-[20px] object-cover rounded-lg shadow-lg z-10' 
                        />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-2 mt-16'>
                        <h2 className='text-center md:text-left text-primary text-2xl md:text-4xl lg:text-5xl mb-4 pt-8'>Vidhyamitra People’s Helping Trust</h2>
                        <div className='flex flex-col gap-4 mb-4'>
                            <p className='text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed'>Welcome to Vidhyamitra People’s Helping Trust, a non-profit organization devoted to helping poor and underprivileged people, especially those living in rural villages. Whenever people are in need — whether it is for food, education, or medical support — we stand ready to help them with compassion and commitment.</p>
                            <p className='text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed'>At Vidhyamitra, we believe our duty extends beyond providing education. We are equally focused on rural development, support for the elderly, and spreading health awareness among villagers. Our goal is to create a balanced and self-reliant society where every person can live with dignity, knowledge, and good health.</p>
                        </div>
                        <Link href="/about" className='text-sm flex items-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 px-4 w-fit transition-colors rounded-md'>
                            Read More 
                            <ChevronRight className='size-4' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPreview;