import { ReactNode } from "react"
import {AiOutlineGithub} from "react-icons/ai"
import {IoEyeSharp} from "react-icons/io5"
interface ButtonProps {
  children?: ReactNode
  PRIMARY?: boolean
  PrimaryUrl?: string
  SecondaryUrl?: string
}

export function ButtonLink({ children,PrimaryUrl,SecondaryUrl ,PRIMARY = false }: ButtonProps) {

  return PRIMARY ? (
    <a className="w-64 p-5 font-bold  rounded-2xl text-black flex items-center gap-4 bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200
    hover:to-blue-700 hover:from-black  hover:text-white hover:animate-bounce dark:from-Fuchsia-800 dark:to-pink-700
    dark:hover:from-black dark:hover:to-pink-700 "
    href={PrimaryUrl}
    rel="noreferrer" target="_blank"
    aria-label='Read more about in github'
    >
      <AiOutlineGithub size={24} />
      {!children && "GitHub"}
      
    </a>
  ) :
    (
      <a className=" w-64 p-5 text-white rounded-2xl flex items-center gap-4 font-bold bg-gradient-to-br from-black to-blue-700
       hover:bg-black  hover:to-cyan-200 hover:from-cyan-900  hover:text-black hover:animate-bounce 
       dark:from-black dark:to-pink-700 dark:hover:from-Fuchsia-800 dark:hover:to-pink-700"
       href={ SecondaryUrl} 
       rel="noreferrer" target="_blank"
       aria-label='Read more about in Demo'
       >
        <IoEyeSharp size={24} />
        {!children && "Demo"}
        
      </a>
    )
}