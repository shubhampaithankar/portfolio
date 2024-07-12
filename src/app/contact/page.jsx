import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa'

import { services } from '../services/page'
import { MotionDiv } from '@/components'

const info = [
    {
        icon: <FaEnvelope />,
        title: 'mail',
        description: 'shubhampaithankar65@gmail.com',
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'address',
        description: 'Nagpur, India',
    },
]

export default function Contact() {
    return (
        <MotionDiv classes="py-4">
            <div className="container mx-auto">
                <div className="flex flex-col gap-[30px] xl:flex-row">
                    <div className="order-2 xl:order-none xl:w-[54%]">
                        <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
                            <h3 className="text-4xl text-accent">Let's work together!</h3>
                            <p>Open to full-time employement, internships & freelancing offers.</p>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input type="name" placeholder="Name" />
                                <Input type="phone" placeholder="Phone" />
                                <Input type="email" placeholder="Email" className="md:col-span-2" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="hire">Hire</SelectItem>
                                        {services.map((service, index) => {
                                            return (
                                                <SelectItem key={index} value={service.title}>
                                                    {service.title}
                                                </SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Enter your request here" />
                            <Button size="md" className="mx-auto max-w-40">
                                Connect
                            </Button>
                        </form>
                    </div>
                    <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="text-[28px]">{item.icon}</div>
                                        <div className="flex-1">
                                            <p className="capitalize text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </MotionDiv>
    )
}
