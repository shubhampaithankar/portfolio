'use client'

import { motion } from 'framer-motion'

export default function MotionDiv({ children, classes }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn',
                },
            }}
            className={classes}
        >
            {children}
        </motion.div>
    )
}
