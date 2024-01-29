'use client'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Index')

  return (
      <footer className="w-full flex flex-col h-10 items-center justify-center
      border-t border-gray-400
      bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100
      dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-400 dark:via-gray-700 ">
        <small>DevSoares Belo Horizonte, MG , Brasil</small>
        
      </footer>
  )
}
