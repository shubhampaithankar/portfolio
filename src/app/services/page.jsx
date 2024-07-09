'use client'

import React from 'react'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

export const services = [
    {
        num: '01',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas iure sequi commodi nam blanditiis exercitationem quibusdam vitae quas excepturi nihil nobis quisquam, minima quo maiores, unde distinctio animi iste.',
        url: '',
    },
    {
        num: '02',
        title: 'Discord Bot Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas iure sequi commodi nam blanditiis exercitationem quibusdam vitae quas excepturi nihil nobis quisquam, minima quo maiores, unde distinctio animi iste.',
        url: '',
    },
    {
        num: '03',
        title: 'Full-Stack App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas iure sequi commodi nam blanditiis exercitationem quibusdam vitae quas excepturi nihil nobis quisquam, minima quo maiores, unde distinctio animi iste.',
        url: '',
    },
]

export default function Services() {
    return (
        <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-6">
            <div className="container mx-auto">
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
                    className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex flex-1 flex-col justify-center gap-6"
                            >
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-5xl font-extrabold transition-all duration-150 group-hover:text-accent-hover">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.url}
                                        className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-150 hover:-rotate-45 group-hover:bg-accent"
                                    >
                                        <BsArrowDownRight className="text-3xl text-primary" />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                                    {service.title}
                                </h2>
                                <p className="text-white/40">{service.desc}</p>
                                <div className="w-full border-b border-white/20"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
