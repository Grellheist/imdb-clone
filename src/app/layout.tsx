import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import SearchBox from "@/components/SearchBox"
import './globals.css'
import Providers from "./Providers"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'IMDb Clone',
    description: 'This is an IMDb clone',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta property="og:image" content={"https://preview.redd.it/wk01okjvpar61.jpg?width=960&crop=smart&auto=webp&s=12cc4ee8093e75a6e0e69f24beefae50cfbfa2e2"} />
            </head>
            <body className={inter.className}>
                <Providers>
                    <Header />
                    <Navbar />
                    <SearchBox />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
