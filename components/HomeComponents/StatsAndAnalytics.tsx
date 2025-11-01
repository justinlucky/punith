import { DollarSign, GraduationCap, HelpingHand, Stethoscope, Users } from 'lucide-react';
import React from 'react'

const Stats = [
  {
    title:"Number of Children Reached",
    number: 1000,
    suffix: "+",
    icon: Users
  },
  {
    title: "Medical Camp and Check-up",
    number: 100,
    suffix: "+",
    icon: Stethoscope
  },
  {
    title: "Number of villages",
    number: 25,
    suffix: "+",
    icon: HelpingHand
  },
  {
    title: "International and National Sponsors",
    number: 10,
    suffix: "+",
    icon: DollarSign
  },
  {
    title: "Children Academic Development",
    number: 98,
    suffix: "%",
    icon: GraduationCap
  }
];

const StatsAndAnalytics = () => {
  return (
    <div className='py-28 px-2 relative md:py-32'>
      <div className='h-28 w-2 bg-gray-800 absolute top-[-8] left-[50%] rounded-xl '/>
      <div className='h-28 w-2 bg-gray-800 absolute bottom-[-8] left-[50%] rounded-xl '/>
      <div>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center'>
          We believe in the power of collective action to create positive change in our communities and beyond.
        </h2>
      </div>
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2'>
        {Stats.map((stat, idx) => (
          <div key={idx} className='flex items-center gap-4 bg-orange-50 px-2 py-4 rounded-md shadow-md hover:scale-102 transition-all duration-3s group'>
            <div className='bg-blue-700 text-white p-2 rounded-md'>
              <stat.icon className='group-hover:size-7 transition-all duration-3s'/>
            </div>
            <div>
              <h3 className='text-xl'><span className='text-3xl font-bold'>{stat.number}</span>{stat.suffix}</h3>
              <p className='text-sm text-gray-500 pt-2'>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsAndAnalytics