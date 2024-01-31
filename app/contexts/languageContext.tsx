import { ReactNode, createContext, useState } from "react"


interface LanguageProviderData {
  handleLanguage: (pathString: string) => void
  pathString:string
}

interface LanguageProvider {
  children: ReactNode
 
}

export const LanguageContext = createContext({} as LanguageProviderData)

export function LanguageProvider({ children }: LanguageProvider) {
  const [pathString, setPath] = useState('pt')
 
  function  handleLanguage (path:string){
    setPath(path)
  }
 
  
  return (
    <LanguageContext.Provider value={
      {handleLanguage, pathString}
    } >
      {children}
    </LanguageContext.Provider>
  )
}