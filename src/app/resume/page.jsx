'use client'

import { useEffect, useState } from 'react'

export default function Resume() {
    const [resumeData, setResumeData] = useState('')

    const fetchResume = async () => {
        try {
            const URL = 'https://shubhampaithankar.github.io/resume/resume.pdf'
            fetch(URL)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    return response.blob()
                })
                .then((file) => {})
            // setResumeData(data)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error)
            return
        }
    }

    useEffect(() => {
        fetchResume()
    }, [])

    useEffect(() => {
        console.log(resumeData)
    }, [resumeData])
    return <div>WIP</div>
}
