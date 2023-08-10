import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFileDone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { Avatar } from './Avatar'
import { Stacks } from './Stacks';



export function Card() {

  const { t } = useTranslation("common");


  return (
    <div className='w-full max-w-sm p-7 h-[480px] z-10 flex flex-col items-center justify-between
    rounded-2xl  bg-gradient-to-b from-gray-900 via-gray-400 to-gray-100 
    dark:from-gray-800 dark:to-gray-700 dark:via-gray-800'>
      <Avatar />
      <strong>Luis Soares</strong>
      <div className='flex flex-col items-center'>
        <span className='flex flex-col items-center'>{t("role")} <span>JavaScript</span> </span>
      </div>

      <span className='flex items-center gap-4'><HiLocationMarker /> {t("location")} </span>

      <Stacks />
      <nav className=' w-full flex flex-col items-center'>
        <div className=' w-full h-1 bg-gradient-to-tl rounded-t-full from-cyan-900 via-cyan-600 to-cyan-200
        dark:from-purple-800 dark:via-Fuchsia-800 dark:to-pink-700'></div>

      <div className=' w-full flex items-center justify-center py-2 gap-4'>
      <a href="https://github.com/luiszkm"
          aria-label='Read more about Luis in github'
          className='hover:animate-bounce'
          rel="noreferrer" target="_blank"><AiFillGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/luis-soares-64b0a6227/"
          aria-label='Read more about Luis in LinkedIn'
          className='hover:animate-bounce'
          rel="noreferrer" target="_blank"><AiOutlineLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/luis_yoshi/?next=%2F"
          aria-label='Read more about Luis in Instagram'
          className='hover:animate-bounce'
          rel="noreferrer" target="_blank"><AiOutlineInstagram size={24} />
        </a>
        <a href="/public/Cv-luis.pdf" className='hover:animate-bounce' download
          aria-label=' Read more about Luis by downloading his resume'
          rel="noreferrer" target="_blank"><AiOutlineFileDone size={24} />
        </a>
      </div>
      </nav>
    </div>
  )
}