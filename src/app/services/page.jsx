import React from 'react'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

import { MotionDiv } from '@/components'

export const services = [
    {
        title: 'Website Development',
        desc: 'Specialized in creating responsive, user-friendly, and visually appealing websites using the latest web technologies. Experienced with React and Angular to build dynamic and engaging websites.',
        url: '',
    },
    {
        title: 'Full-Stack Web Application Development',
        desc: 'Proficient in both frontend and backend development, capable of building robust and scalable web applications. Adept at integrating APIs and ensuring seamless user experiences.',
        url: '',
    },
    {
        title: 'Discord Bot Development',
        desc: 'Experienced in developing custom Discord bots to automate tasks, manage communities, and enhance user engagement. Proficient with knowledge of the Discord.js library to create feature-rich bots.',
        url: '',
    },
    {
        title: 'Browser Extension Development',
        desc: 'Expert in developing browser extensions to enhance web browser functionality and improve user experience. Skilled in creating extensions for Chrome, Firefox, and other major browsers.',
        url: '',
    },
]

// todo: fix mapped div css
export default function Services() {
    return (
        <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-6">
            <div className="container mx-auto">
                <MotionDiv classes="grid grid-cols-1 gap-[60px] md:grid-cols-2">
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex flex-1 flex-col justify-center gap-6"
                            >
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-5xl font-extrabold transition-all duration-150 group-hover:text-accent-hover">
                                        0{index + 1}
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
                </MotionDiv>
            </div>
        </section>
    )
}
