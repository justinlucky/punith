'use client'
import React, { useState, useEffect } from 'react'

const Images = [
  {
    image: "https://images.unsplash.com/photo-1758825178518-ca48833a6c57?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIwMTIwODl8&ixlib=rb-4.1.0&q=85"
  },
  {
    image: "https://images.unsplash.com/photo-1758718036788-de50f9fd2192?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIwMTIwODl8&ixlib=rb-4.1.0&q=85"
  },
  {
    image: "https://images.unsplash.com/photo-1760434524500-9461ed8c9b26?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIwMTIxNjd8&ixlib=rb-4.1.0&q=85"
  },
  {
    image: "https://images.unsplash.com/photo-1754038373296-77dfb664da12?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIwMTIxNjd8&ixlib=rb-4.1.0&q=85"
  }
]

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
    }, 10000) // Switch every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative bg-gray-50 h-80 md:h-[700px] mb-16 overflow-hidden'>
      {Images.map((img, idx) => (
        <img
          key={idx}
          src={img.image}
          alt={`Banner image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}

export default Banner