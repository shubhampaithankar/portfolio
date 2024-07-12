import { useState, useEffect } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as TbIcons from 'react-icons/tb'
import * as SiIcons from 'react-icons/si'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const iconLibraries = [
    { prefix: 'Fa', icons: FaIcons },
    { prefix: 'Tb', icons: TbIcons },
    { prefix: 'TbBrand', icons: TbIcons },
    { prefix: 'Si', icons: SiIcons },
]

export default function IconTooltip({ skill }) {
    const { description } = skill
    const [IconComponent, setIconComponent] = useState(null)

    useEffect(() => {
        const importIcon = async () => {
            const iconName = capitalize(skillIcons[description]) || capitalize(description)

            for (const { prefix, icons } of iconLibraries) {
                const componentName =
                    prefix === 'TbBrand' ? `TbBrand${iconName}` : `${prefix}${iconName}`
                const Icon = icons[componentName]

                if (Icon) {
                    setIconComponent(() => Icon)
                    return
                }
            }

            console.log(`No icon found for ${iconName}`)
            setIconComponent(null)
        }

        importIcon()
    }, [description])

    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="group flex h-[125px] w-full items-center justify-center rounded-xl bg-[#232329]">
                    <div className="text-6xl transition-all duration-300 group-hover:text-accent">
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
