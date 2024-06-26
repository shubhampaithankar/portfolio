'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Full Stack Enginner</span>
                        <h1 className="h1 mb-6">
                            Hello! I am
                            <br />
                            <span className="text-accent">Shubham Paithankar</span>
                        </h1>
                        <p className="mb-8 max-w-[500px] text-white/80">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias
                            eum sed nemo corrupti voluptates illo iusto debitis officiis dolorum, et
                            totam consectetur laborum ipsum aperiam quidem consequuntur deleniti
                            praesentium!
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
                    <div>
                        <Photo />
                    </div>
                </div>
            </div>
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
                    className="h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
                >
                    {/* <Image src="" priority quality={100} fill alt="" className="object-contain" /> */}
                </motion.div>
            </motion.div>
        </div>
    )
}
