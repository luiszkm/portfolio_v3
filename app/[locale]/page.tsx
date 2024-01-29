'use client'

import { useTranslations } from 'next-intl'
import { Card } from '../components/Card'
import { useContext } from 'react'
import { menuContext } from '../contexts/menuContext'
import { About } from '../components/About'
import { Skills } from '../components/Skills'

export default function Index() {
  const context = useContext(menuContext)

  const t = useTranslations('Index')
  return (
    <div className="flex items-center gap-4 p-3 w-full ">
      <Card />
      {context.menu === 'home' ? <About /> : <Skills />}

      
    </div>
  )
}
