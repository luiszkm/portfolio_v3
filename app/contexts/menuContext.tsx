import { ReactNode, createContext, useState } from "react"


export interface Product {
  menu:string
}
interface MenuProviderData {
  handleMenu: (params: string) => void
  menu:string
}

interface MenuProvider {
  children: ReactNode
 
}

export const menuContext = createContext({} as MenuProviderData)

export function MenuProvider({ children }: MenuProvider) {
  const [menu, setMenu] = useState('home')
 
  function  handleMenu (menu:string){
    setMenu(menu)
  }
 
  
  return (
    <menuContext.Provider value={
      {handleMenu, menu}
    } >
      {children}
    </menuContext.Provider>
  )
}