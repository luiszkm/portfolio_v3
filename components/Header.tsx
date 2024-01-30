'use client'
import { NavMenu } from './NavMenu'

import { LanguageSwitcher } from './languageSwitcher'
import { DarkModeButton } from './DarkMode'

import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { menuContext } from '../app/contexts/menuContext'
import Link from 'next/link'

export function Header() {
  const { handleMenu, menu } = useContext(menuContext)
  const t = useTranslations('Header')

  return (
    <header
      className="w-full  h-16 flex items-center justify-between px-4 
    bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100
     border-b border-gray-400

    dark:bg-gradient-to-tl dark:from-gray-900 dark:border-none"
    >
      <div className="flex items-center gap-4">
        <DarkModeButton />
        <LanguageSwitcher />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex gap-6 font-bold text-center cursor-pointer">
            <li
              className="relative group">
              <Link
                className=""
                href={'/'}
                onClick={() => {
                  handleMenu('home')
                }}
              >
                {t('about')}
              </Link>
              <div
                className="w-0 h-0.5 m-auto bg-pink-700
                transition-all duration-500 ease-in-out
                 group-hover:w-full "
              />
            </li>
        
          <li className="relative group">
            <Link
              href={'/'}
              onClick={() => {
                handleMenu('skills')
              }}
            >
              {t('skills')}
            </Link>
            <div
                className="w-0 h-0.5 m-auto bg-pink-700
                transition-all duration-500 ease-in-out
                 group-hover:w-full "
              />
          </li>
          <li className="relative group">
            <Link href={'/projects'}>{t('projects')}</Link>
            <div
                className="w-0 h-0.5 m-auto bg-pink-700
                transition-all duration-500 ease-in-out
                 group-hover:w-full "
              />
          </li>
        </ul>
      </nav>
      {/* <NavMenu /> */}
    </header>
  )
}
