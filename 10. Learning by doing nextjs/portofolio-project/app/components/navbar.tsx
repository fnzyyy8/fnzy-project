import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between bg-black bg-opacity-50 text-white h-16 w-screen px-2 py-6 drop-shadow-md fixed'>
            <Link href="/">
                <Image src="./Farhan-Porto-icon.svg" alt='icon' width={80} height={80} />
            </Link>
            <ul className='flex '>
                <Link href="/about">
                    <li className='mr-6'>About</li>
                </Link>
                <Link href="/about">
                    <li className='mr-6'>Product</li>
                </Link>
                <Link href="/about">
                    <li className='mr-6'>Sevice</li>
                </Link>
            </ul>
        </nav>
    )
}
