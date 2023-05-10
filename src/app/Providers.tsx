"use client"
import React from 'react'
import { ThemeProvider } from "next-themes"

export default function Providers({ children }: { children: string }) {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    )
}
