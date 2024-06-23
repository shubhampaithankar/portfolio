"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='py-4 xl:py-12 text-white'>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className='text-4xl font-semibold'>
                Shubham 
                <span className="text-accent">.</span>
            </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-4">
                <Nav />
                <Link href='/contact'>
                    <Button>
                        Hire Me!
                    </Button>
                </Link>
            </div>

            <div className="xl:hidden">
                mobile-view
            </div>
        </div>
    </header>
  )
}

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className='flex gap-4'>
            {
                links.map((link, i) => 
                    <Link 
                        key={link.name} 
                        href={link.path}
                        className={
                            `
                                ${link.path === pathname && 'text-accent border-b-2 border-accent'} 
                                capitalize 
                                font-medium
                            hover:text-accent 
                                transition-all
                            `
                        }
                    >
                        {link.name}
                    </Link>
                )
            }
        </nav>
    )
}
