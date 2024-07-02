import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

import { Socials, Stats, Photo } from '@/components/home'

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div className="order-2 text-center xl:order-none xl:text-left">
                        <span className="text-xl">Software Engineer</span>
                        <h1 className="h1 mb-6">
                            Hello! I am
                            <br />
                            <span className="text-accent">Shubham Paithankar</span>
                        </h1>
                        <p className="mb-8 max-w-[500px] text-white/80">
                            I am a full-stack software engineer specializing in JavaScript, with
                            proficiency in both frontend and backend technologies.
                        </p>
                        <div className="flex flex-col items-center gap-8 xl:flex-row">
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2 uppercase"
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles={'flex gap-6'}
                                    iconStyles={
                                        'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 mb-8 xl:order-none xl:mb-8">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    )
}
