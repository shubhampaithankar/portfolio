'use client'

import { useState, useEffect } from 'react'
import CountUp from 'react-countup'

export default function Stats() {
    const [stats, setStats] = useState(null)

    useEffect(() => {
        async function fetchStats() {
            const stats = await getStats()
            setStats(stats)
        }
        fetchStats()
    }, [])

    if (!stats) return null

    return (
        <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
            <div className="container mx-auto">
                <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
                    {Object.keys(stats).map((key, index) => (
                        <div
                            key={index}
                            className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                        >
                            <CountUp
                                end={stats[key]}
                                duration={5}
                                delay={2}
                                className="text-4xl font-extrabold xl:text-6xl"
                            />
                            <p
                                className={`${key.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} capitalize leading-snug text-white/80`}
                            >
                                {key}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

async function getStats() {
    try {
        const URL = `https://awesome-github-stats.azurewebsites.net/user-stats/shubhampaithankar/rank`
        const res = await fetch(URL)
        if (!res.ok) throw new Error('Failed to fetch data')
        const {
            userStats: { commits, pullRequests, contributedTo },
            score,
        } = await res.json()
        return {
            'years of Experience': 1,
            'pull Requests': pullRequests,
            contributions: contributedTo,
            commits,
            score,
        }
    } catch (error) {
        return null
    }
}
