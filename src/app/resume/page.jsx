'use client'

import { useState, useEffect, Children } from 'react'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function Resume() {
    const [resume, setResume] = useState({})

    const fetchResumeAsJSON = async () => {
        const RESUME_URL = 'https://shubhampaithankar.github.io/resume/resume.pdf'
        const API_URL = 'https://worke.formextractorai.com/v2/extract'
        // const response = await fetch(API_URL, {
        //     method: 'POST',
        //     headers: {
        //         accept: 'application/json:',
        //         'X-WORKER-EXTRACTOR-ID': '',
        //         'X-WORKER-IMAGE-URL': RESUME_URL,
        //         'X-WORKER-ENCODING': 'raw',
        //         'X-WORKER-PDF-DPI': '150',
        //         'X-WORKER-ASYNC': 'false',
        //         'X-WORKER-AUTO-ADJUST-IMAGE-SIZE': 'true',
        //         'X-WORKER-PROCESSING-MODE': 'per-page',
        //         'content-type': 'image/*',
        //         'X-WORKER-TOKEN': '',
        //     },
        //     cache: 'force-cache',
        // })
        // if (!response.ok) throw new Error(`API request failed with status ${response.status}`)
        // const data = await response.json()
        // const resumeData = data.documents[0].data
        // const resumeData = dummyData
        // setResume(resumeData)
    }

    useEffect(() => {
        fetchResumeAsJSON()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn',
                },
            }}
            className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                {resume && (
                    <Tabs
                        className="flex flex-col gap-[60px] xl:flex-row"
                        defaultValue={Object.keys(fields)[0]}
                    >
                        <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
                            {Object.keys(fields).map(
                                (field, index) =>
                                    fields.hasOwnProperty(field) && (
                                        <TabsTrigger
                                            key={index}
                                            className="capitalize"
                                            value={field}
                                        >
                                            {fields[field]}
                                        </TabsTrigger>
                                    ),
                            )}
                        </TabsList>
                        <div className="min-h-[70vh] w-full">
                            {/* experience */}
                            <TabsContent value="employment_history" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center">
                                    <h3 className="text-4xl font-bold">Professional Experience</h3>
                                    <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0"></p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                            {resume.employment_history?.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                                                >
                                                    <span className="text-accent">
                                                        {new Date(
                                                            item.employment_start_date,
                                                        ).toLocaleString('default', {
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })}{' '}
                                                        to{' '}
                                                        {new Date(
                                                            item.employment_end_date,
                                                        ).toLocaleString('default', {
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })}
                                                    </span>
                                                    <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                                                        {item.job_title}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="h-[6px] w-[6px]"></span>
                                                        <p className="text-white/60">
                                                            {item.employer}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/* projects */}
                            <TabsContent value="projects" className="w-full">
                                {/* Add your projects content here */}
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value="skills" className="w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold"></h3>
                                        <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0"></p>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                        {resume.skills?.map((skill, index) => (
                                            <li key={index}>
                                                <IconTooltip skill={skill} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                )}
            </div>
        </motion.div>
    )
}

const IconTooltip = ({ skill }) => {
    const { description } = skill
    const [IconComponent, setIconComponent] = useState(null)

    useEffect(() => {
        const importIcon = async () => {
            try {
                const { [`Fa${capitalize(description)}`]: ImportedIcon } = await import(
                    `react-icons/fa`
                )
                setIconComponent(() => ImportedIcon)
            } catch (error) {
                console.error('Error loading icon:', error)
                setIconComponent(null)
            }
        }

        importIcon()
    }, [description])

    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                    <div
                        className={`${IconComponent ? 'text-6xl' : 'text-2xl'} transition-all duration-300 group-hover:text-accent`}
                    >
                        {IconComponent ? <IconComponent /> : description}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="capitalize">{description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

const fields = {
    employment_history: 'experience',
    projects: 'projects',
    skills: 'skills',
}
