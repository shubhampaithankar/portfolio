'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

import { CiMenuFries } from 'react-icons/ci'
import Image from 'next/image'

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
    // {
    //     name: 'work',
    //     path: '/work',
    // },
    {
        name: 'contact',
        path: '/contact',
    },
]

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
                <div className="hidden items-center gap-8 xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me!</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

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

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[28px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mb-40 mt-32 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Shubham
                            <span className="text-accent">.</span>
                        </h1>
                        {/* <Image /> */}
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8">
                    {links.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={` ${link.path === pathname && 'border-b-2 border-accent text-accent'} text-xl capitalize transition-all hover:text-accent`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
