'use client'

import { useState, useEffect } from 'react'

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
        const resumeData = dummyData
        setResume(resumeData)
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
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">Experience</h3>
                                        <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                                            My professioanl experience that includes full-time
                                            employment, internships and freelancing.
                                        </p>
                                    </div>
                                    <ScrollArea className="h-[600px]">
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
                                                        <span className="h-[6px] w-[6px] rounded bg-accent"></span>
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
                                        <h3 className="text-4xl font-bold">Skills</h3>
                                        <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                                            I currently use the following languages, tools and
                                            technologies.
                                        </p>
                                    </div>
                                    <ScrollArea className="h-[600px]">
                                        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                            {resume.skills?.map((skill, index) => (
                                                <li key={index}>
                                                    <IconTooltip skill={skill} />
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
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
                const name = capitalize(skillIcons[description]) || capitalize(description)
                let FaIcon, TbIcon, TbBrandIcon, SiIcon

                // Attempt to import FaIcon
                try {
                    const FaModule = await import(`react-icons/fa`)
                    const iconName = `Fa${name}`
                    FaIcon = FaModule[iconName]
                } catch (error) {
                    console.warn('FaIcon not found:', error)
                }

                if (FaIcon) {
                    // console.log(`Icon found for ${name} as ${Object.keys({ FaIcon })[0]}`)
                    setIconComponent(() => FaIcon)
                    return
                }

                // Attempt to import TbIcon
                const TbModule = await import(`react-icons/tb`)
                try {
                    const iconName = `Tb${name}`
                    TbIcon = TbModule[iconName]
                } catch (error) {
                    console.warn('TbIcon not found:', error)
                }

                if (TbIcon) {
                    // console.log(`Icon found for ${name} as ${Object.keys({ TbIcon })[0]}`)
                    setIconComponent(() => TbIcon)
                    return
                }

                try {
                    const iconName = `TbBrand${name}`
                    TbBrandIcon = TbModule[iconName]
                } catch (error) {
                    console.warn('TbBrandIcon not found:', error)
                }

                if (TbBrandIcon) {
                    // console.log(`Icon found for ${name} as ${Object.keys({ TbBrandIcon })[0]}`)
                    setIconComponent(() => TbBrandIcon)
                    return
                }

                // Attempt to import SiIcon
                try {
                    const iconName = `Si${name}`
                    const SiModule = await import(`react-icons/si`)
                    SiIcon = SiModule[iconName]
                } catch (error) {
                    console.warn('SiIcon not found:', error)
                }

                if (SiIcon) {
                    // console.log(`Icon found for ${name} as ${Object.keys({ SiIcon })[0]}`)
                    setIconComponent(() => SiIcon)
                    return
                }

                // If no icon is found
                console.log(`No icon found for ${name}`)
                setIconComponent(null)
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
                <TooltipTrigger className="group flex h-[125px] w-full items-center justify-center rounded-xl bg-[#232329]">
                    <div className={`text-6xl transition-all duration-300 group-hover:text-accent`}>
                        {IconComponent ? <IconComponent /> : null}
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

const skillIcons = {
    HTML: 'HTML5',
    CSS: 'CSS3',
    JavaScript: 'JavaScript',
    TypeScript: 'TypeScript',
    Node: 'Node',
    Java: 'Java',
    'VS Code': 'Vscode',
    Eclipse: 'Intellijidea', // si
    Postman: 'Postman',
    Git: 'Git',
    Jira: 'Jira',
    Trello: 'Trello',
    React: 'React',
    Angular: 'Angular',
    Bootstrap: 'Bootstrap',
    Tailwind: 'Tailwind',
    Vite: 'Vite',
    Next: 'Nextjs',
    Express: 'Express', // si
    Nest: 'Nestjs', // si
    Spring: 'Spring', //si
    'REST API': 'api',
    MySQL: 'MySQL',
    MongoDB: 'MongoDB',
    Linux: 'Linux',
    Docker: 'Docker',
    'CI/CD': 'Infinity',
}
