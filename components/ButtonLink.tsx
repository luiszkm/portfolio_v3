import { ReactNode } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'

interface ButtonProps {
  children?: ReactNode
  PRIMARY?: boolean
  PrimaryUrl?: string
  SecondaryUrl?: string
}

export function ButtonLink({
  children,
  PrimaryUrl,
  SecondaryUrl,
  PRIMARY = false
}: ButtonProps) {
  return PRIMARY ? (
    <motion.a
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -40, opacity: 0 }}
      transition={{ duration: 1, type: 'tween' }}
      whileTap={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      whileHover={{ scale: 1.1 }}
      className="w-64
       p-5 font-bold 
       rounded-2xl
        text-white
        flex items-center 
        gap-4 bg-gradient-to-tl
        shadow-md
        dark:hover:shadow-white
    from-black to-pink-700
   
    "
      href={PrimaryUrl}
      rel="noreferrer"
      target="_blank"
      aria-label="Read more about in github"
    >
      <AiOutlineGithub size={24} />
      {!children && 'GitHub'}
    </motion.a>
  ) : (
    <motion.a
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 40, opacity: 0 }}
      transition={{ duration: 1, type: 'tween'}}
      whileTap={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      whileHover={{ scale: 1.1 }}
      className=" w-64 p-5 text-white rounded-2xl flex items-center gap-4 font-bold bg-gradient-to-br 
      shadow-md
      dark:hover:shadow-white
      from-black to-pink-700
      "
      href={SecondaryUrl}
      rel="noreferrer"
      target="_blank"
      aria-label="Read more about in Demo"
    >
      <IoEyeSharp size={24} />
      {!children && 'Demo'}
    </motion.a>
  )
}
