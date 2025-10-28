"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "./ui/particles"
import Link from "next/link"

const Footer = () => {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#5b4388ff")
  }, [resolvedTheme])

  const Links = [
    {title:"Home", url:"/"},
    {title:"About Us", url:"/about"},
    {title:"Services", url:"/services"},
    {title:"Contact", url:"/contact"}
  ]

  return (
    <div className="relative flex w-full overflow-hidden px-2 md:px-4 py-8">
      <Particles
        className="absolute inset-0 z-0"
        quantity={64}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative z-10">
        <div className="">
          <h1 className='text-xl font-bold md:text-2xl lg:text-3xl'>Vidhyamitra People’s Helping Trust</h1>
        </div>
        <div className="mt-8">
          <ul className="flex gap-4 flex-wrap justify-center sm:flex-start">
            {Links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4 mt-8">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Footer