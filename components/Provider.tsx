'use client'

import { ThemeProvider } from 'next-themes'
import { MenuProvider } from '../app/contexts/menuContext'
import { type ThemeProviderProps } from "next-themes/dist/types"

export function Providers({ children , ...props}: ThemeProviderProps) {
  return (
    <ThemeProvider 
    enableSystem={true} 
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
    
    >
      <MenuProvider>{children}</MenuProvider>
    </ThemeProvider>
  )
}
