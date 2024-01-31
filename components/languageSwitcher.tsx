'use client'
import { useRouter, useParams, usePathname } from 'next/navigation'


export function LanguageSwitcher() {
  const params = useParams()
  const enInactivated = params.locale === 'en'
  const path = usePathname()

  const { replace } = useRouter()

  const handleLocaleChange = (language: string) => {
    
    if (path === '/pt' || path === '/') {
      return replace(language)
    }
    if (path === '/pt/projects') {
      return replace('/en/projects')
    }
    if (path === '/en/projects' || path === '/projects') {
      return replace('/pt/projects')
    }
  }

  return (
    <div className="flex items-center gap-3">
      <img
        className={enInactivated ? 'opacity-20 cursor-pointer' : ''}
        src="https://img.icons8.com/color/32/null/brazil.png"
        alt="Bandeira do brasil"
        title="Pt-BR"
        width={32}
        height={32}
        onClick={() => handleLocaleChange('pt')}
      />

      <img
        className={enInactivated ? '' : 'opacity-20 cursor-pointer'}
        src="https://img.icons8.com/color/32/null/usa.png"
        alt="Bandeira dos EUA"
        title="Pt-BR"
        width={32}
        height={32}
        onClick={() => handleLocaleChange('en')}
      />
    </div>
  )
}
