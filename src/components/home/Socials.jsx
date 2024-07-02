'use client'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

export const socials = [
    {
        name: 'github',
        icon: <FaGithub />,
        url: 'https://www.github.com/shubhampaithankar',
    },
    {
        name: 'linkedIn',
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/shubham-paithankar',
    },
]

export default function Socials({ containerStyles, iconStyles }) {
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
