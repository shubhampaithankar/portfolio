'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function StairTransition() {
    const pathname = usePathname()
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
                        <Stairs />
                    </div>
                    <motion.div
                        className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 0,
                            transition: {
                                delay: 1,
                                duration: 0.4,
                                ease: 'easeInOut',
                            },
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    )
}

const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
}

const Stairs = () => {
    return [...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.15,
                    ease: 'easeInOut',
                    delay: reverseIndex(6, index) * 0.1,
                }}
                className="relative h-full w-full bg-white"
            />
        )
    })
}

const reverseIndex = (length, i) => length - i - 1
