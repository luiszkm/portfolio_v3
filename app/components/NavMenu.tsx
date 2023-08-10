import { useRef, useState } from 'react'
import { useTranslation } from "next-i18next";

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'


export function NavMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation("header");
  try {
    const body: any = document.querySelector('body')
    showMenu ? body.className = 'overflow-hidden' : body.className = 'overflow-auto'
  } catch (error) {
    console.log(error);
  }

  return (
    <div >
      {!showMenu ?
        <div className='md:hidden '>
          <GiHamburgerMenu className='cursor-pointer' onClick={() => setShowMenu(true)} />
        </div> :
        <div>
          <nav className="w-full min-h-screen absolute top-0 left-0 bg-gradient-to-b from-cyan-900 via-cyan-600 to-cyan-200 flex justify-center items-start py-16 z-20  dark:from-gray-900 dark:to-gray-400 dark:via-gray-700 ">
            <AiOutlineClose className='cursor-pointer absolute top-3 right-3' onClick={() => setShowMenu(false)} />
            <ul className='flex flex-col gap-4 text-center cursor-pointer'>
              <li className='hover:text-white' onClick={() => setShowMenu(false)} >
                <a href="#about">{t("about")}</a>
              </li>
              <li className='hover:text-white' onClick={() => setShowMenu(false)} >
                <a href="#skills">{t("skills")}</a>
              </li>
              <li className='hover:text-white' onClick={() => setShowMenu(false)} >
                <a href="#formation">{t("formation")}</a>
              </li>
              <li className='hover:text-white' onClick={() => setShowMenu(false)} >
                <a href="#project">{t("projects")}</a>
              </li>
            </ul>
          </nav>
        </div>
      }
    </div>
  )

}

