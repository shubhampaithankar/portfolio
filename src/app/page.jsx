'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div className="order-2 text-center xl:order-none xl:text-left">
                        <span className="text-xl">Software Engineer</span>
                        <h1 className="h1 mb-6">
                            Hello! I am
                            <br />
                            <span className="text-accent">Shubham Paithankar</span>
                        </h1>
                        <p className="mb-8 max-w-[500px] text-white/80">
                            I am full stack software engineer excelling in JavaScript. I am
                            proficient in both frontend and backend languages and technologies.
                        </p>
                        <div className="flex flex-col items-center gap-8 xl:flex-row">
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2 uppercase"
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles={'flex gap-6'}
                                    iconStyles={
                                        'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 mb-8 xl:order-none xl:mb-8">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    )
}

const socials = [
    {
        name: 'github',
        icon: <FaGithub />,
        url: '',
    },
    {
        name: 'linkedIn',
        icon: <FaLinkedinIn />,
        url: '',
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={item.name} href={item.url} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

const Photo = () => {
    return (
        <div className="relative h-full w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.2,
                        ease: 'easeIn',
                    },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.2,
                            duration: 0.2,
                            ease: 'easeInOut',
                        },
                    }}
                    className="absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
                >
                    {/* <Image src="" priority quality={100} fill alt="" className="object-contain" /> */}
                </motion.div>
                <motion.svg
                    className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="https://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            strokeDasharray: '24 10 0 0',
                        }}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

const stats = [
    {
        num: 1,
        text: 'Year of Experience',
    },
    {
        num: 2,
        text: 'Projects',
    },
    {
        num: 8,
        text: 'Technolgies',
    },
]

const Stats = () => {
    return (
        <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
            <div className="container mx-auto">
                <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl font-extrabold xl:text-6xl"
                                />
                                <p
                                    className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
