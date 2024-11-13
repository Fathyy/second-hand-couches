import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between py-4'>
        <div>
            <p>Your Coach</p>
        </div>
        <div className="flex justify-between items-center gap-8 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div>
            <button className="bg-rust-orange text-light-grey px-4 py-2 rounded-lg">Contact Us</button>
        </div>

    </nav>
  )
}

export default Navbar