'use client'
import { useRouter, useParams } from 'next/navigation'

export function LanguageSwitcher() {
  const params = useParams();
  const enInactivated = params.locale === 'en';
  const {replace, } = useRouter();
  console.log(params);
  
  const handleLocaleChange = (language: string) => {
    replace(language)
 
  };
  
  return (
    <div className="flex items-center gap-3">
   
      <img className={enInactivated ? "opacity-20 cursor-pointer" : ""}
        src="https://img.icons8.com/color/32/null/brazil.png"
        alt="Bandeira do brasil" title="Pt-BR" width={32} height={32}
        onClick={() => handleLocaleChange('pt')} />

      <img className={enInactivated ? "" : "opacity-20 cursor-pointer"}
        src="https://img.icons8.com/color/32/null/usa.png"
        alt="Bandeira do EUA" title="Pt-BR" width={32} height={32}
        onClick={() => handleLocaleChange('en')} />

    </div>
  )
}

