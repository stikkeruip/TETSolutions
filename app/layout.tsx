import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import ScrollDrivenLayout from "@/components/common/scroll-driven-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "TET - Technical Engineers for Technology",
    description: "Innovative hardware and software solutions for the Middle East",
    generator: 'v0.dev'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ScrollDrivenLayout>{children}</ScrollDrivenLayout>
        </body>
        </html>
    )
}