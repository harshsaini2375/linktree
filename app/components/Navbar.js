import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-white rounded-full w-[90vw] h-[90px] fixed top-12 left-[10vh] items-center justify-between px-10  flex'>
      <div className="left flex gap-16">
        <Link href="/"><Image
          src="/icon.svg"
          width={100}
          height={100}
          alt="Picture of the icon" /></Link>
        <ul className='flex gap-10 text-gray-500 '>
          <Link href="/">Templates</Link>
          <Link href="/">Marketplace</Link>
          <Link href="/">Discover</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Learn</Link>
        </ul>
      </div>
      <div className="login flex gap-5">
        <button className='bg-[#eff0ec] px-7 py-5 rounded-lg'>Log in</button>
        <button className='bg-[#1e2330] py-5 px-7 rounded-full text-white font-bold'>Sign up free</button>
      </div>
    </div>
  )
}

export default Navbar
