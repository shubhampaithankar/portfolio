import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

import { Header, StairTransition, PageTranstion } from '../components'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrainsMono',
})

export const metadata = {
    title: "Shubham's Portfolio",
    description: 'Portfolio Web Application By Shubham Paithankar',
    icons: {
        icon: 'favico.svg',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTranstion>{children}</PageTranstion>
            </body>
        </html>
    )
}
