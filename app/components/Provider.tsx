'use client'

import { ThemeProvider } from 'next-themes'
import { MenuProvider } from '../contexts/menuContext'
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <MenuProvider>{children}</MenuProvider>
    </ThemeProvider>
  )
}
