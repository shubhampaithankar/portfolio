'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Resume() {
    const [resume, setResume] = useState()
    const [currentTab, setCurrentTab] = useState()
    const fetchResumeAsJSON = async () => {
        const RESUME_URL = 'https://shubhampaithankar.github.io/resume/resume.pdf'
        const API_URL = 'https://worke.formextractorai.com/v2/extract'
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                accept: 'application/json:',
                'X-WORKER-EXTRACTOR-ID': '',
                'X-WORKER-IMAGE-URL': RESUME_URL,
                'X-WORKER-ENCODING': 'raw',
                'X-WORKER-PDF-DPI': '150',
                'X-WORKER-ASYNC': 'false',
                'X-WORKER-AUTO-ADJUST-IMAGE-SIZE': 'true',
                'X-WORKER-PROCESSING-MODE': 'per-page',
                'content-type': 'image/*',
                'X-WORKER-TOKEN': '',
            },
            cache: 'force-cache',
        })
        if (!response.ok) throw new Error(`API request failed with status ${response.status}`)
        const data = await response.json()
        const resumeData = data.documents[0].data
        setResume(resumeData)
        setCurrentTab(Object.keys(resumeData)[0])
    }

    useEffect(() => {
        fetchResumeAsJSON()
    }, [])
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
            className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue={currentTab}
                    className="flex flex-col gap-[60px] xl:flex-row"
                    onChange={(e) => setCurrentTab(e.target.value)}
                >
                    <TabsList>
                        {dummyData &&
                            Object.keys(dummyData).map((field, index) => {
                                return (
                                    <TabsTrigger key={index} className="capitalize" value={field}>
                                        {field}
                                    </TabsTrigger>
                                )
                            })}
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <Switch value={currentTab}>
                            {/* experience */}
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center">
                                    <h3 className="text-4xl font-bold"></h3>
                                    <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0"></p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                            {false &&
                                                [].map((item, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                                                        >
                                                            {/* duration<span>{}</span> *  */}
                                                            <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                                                                {item.position}
                                                            </h3>
                                                            <div className="flex items-center gap-3">
                                                                <span className="h-[6px] w-[6px]"></span>
                                                                <p className="text-white/60">
                                                                    {item.organisation}
                                                                </p>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/* projects */}
                        </Switch>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

const Switch = ({ value, children }) => children.find((child) => child.props.value === value)
