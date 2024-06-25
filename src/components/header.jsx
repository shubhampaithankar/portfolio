'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from './ui/button'

export default function Header() {
    return (
        <header className="py-4 text-white xl:py-12">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Shubham
                        <span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden items-center gap-4 xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me!</Button>
                    </Link>
                </div>

                <div className="xl:hidden">mobile-view</div>
            </div>
        </header>
    )
}

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className="flex gap-4">
            {links.map((link, i) => (
                <Link
                    key={link.name}
                    href={link.path}
                    className={` ${link.path === pathname && 'border-b-2 border-accent text-accent'} font-medium capitalize transition-all hover:text-accent`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}
