'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { AnimatePresence, motion } from 'framer-motion'

export default function PageTranstion({ children }) {
    const pathname = usePathname()

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: 'easeInOut',
                        },
                    }}
                    className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
                />
            </div>
            {children}
        </AnimatePresence>
    )
}
