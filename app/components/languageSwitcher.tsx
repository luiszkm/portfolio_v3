'use client'
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation'
import {useTranslations} from 'next-intl';
import { useState } from 'react';


export function LanguageSwitcher() {
  const [enActive, setEnActive] = useState<Boolean>(false)

  
  const {replace} = useRouter();

  const handleLocaleChange = (language: string) => {
    language === 'pt' ? setEnActive(false) : setEnActive(true)
    replace(language);
  };
  

  return (
    <div className="flex items-center gap-3">
   
      <img className={enActive ? "opacity-20 cursor-pointer" : ""}
        src="https://img.icons8.com/color/32/null/brazil.png"
        alt="Bandeira do brasil" title="Pt-BR" width={32} height={32}
        onClick={() => handleLocaleChange('pt')} />

      <img className={enActive ? "" : "opacity-20 cursor-pointer"}
        src="https://img.icons8.com/color/32/null/usa.png"
        alt="Bandeira do EUA" title="Pt-BR" width={32} height={32}
        onClick={() => handleLocaleChange('en')} />

    </div>
  )
}

