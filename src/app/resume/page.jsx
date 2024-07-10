'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Resume() {
    const [resume, setResume] = useState()
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
        setResume(data.documents[0].data)
    }

    useEffect(() => fetchResumeAsJSON(), [])
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
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row">
                    <TabsList>
                        {resume &&
                            Object.keys(resume).map((field, index) => {
                                return <TabsTrigger key={index}>{field}</TabsTrigger>
                            })}
                    </TabsList>
                </Tabs>
            </div>
        </motion.div>
    )
}
