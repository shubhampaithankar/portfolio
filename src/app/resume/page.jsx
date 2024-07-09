'use client'

import { useEffect, useState } from 'react'

export default function Resume() {
    const [resumeData, setResumeData] = useState('')

    const fetchResume = async () => {
        try {
            const URL = 'https://shubhampaithankar.github.io/resume/resume.pdf'
            fetch(URL)
                .then(async (response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    const blob = await response.blob()
                    const file = new File([blob], 'resume.pdf', {
                        lastModified: new Date().getTime(),
                        type: blob.type,
                    })
                    return file
                })
                .then(async (file) => {
                    const formData = new FormData()
                    formData.append('providers', 'affinda')
                    formData.append('file', file)

                    try {
                        const response = await fetch(
                            'https://api.edenai.run/v2/ocr/resume_parser',
                            {
                                method: 'POST',
                                headers: {
                                    Authorization: 'Bearer api-key',
                                },
                                body: formData,
                            },
                        )
                        const data = await response.json()
                        setResumeData(data)
                    } catch (error) {}
                })
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
