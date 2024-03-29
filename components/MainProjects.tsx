'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ButtonLink } from './ButtonLink'
import { BsCheck2All } from 'react-icons/bs'
import { motion } from 'framer-motion'
interface MainPRojectsProps {
  urlImage: string
  urlGithub: string
  urlDemo: string
  name: string
  frontend: string[] | undefined
  description: [] | any
}

export function MainProjects({
  description,
  frontend,
  name,
  urlDemo,
  urlGithub,
  urlImage
}: MainPRojectsProps) {
  const t = useTranslations(`Projects.${description}`)
  const descriptions = ['feat1', 'feat2', 'feat3', 'feat4', 'feat5']
  return (
    <div className="w-full max-w-2xl flex flex-col  items-center ">
      <motion.div
        className="w-full h-full rounded-t-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      
      >
      <Image
        className="rounded-t-2xl w-full h-full"
        width={265}
        height={256}
        layout="responsive"
        quality={100}
        src={`${urlImage}`}
        alt=""
      />
      </motion.div>
    

      <div
        className="h-1 w-full  bg-gradient-to-tl 
     from-purple-800 via-Fuchsia-800 to-pink-700"
      ></div>

      <div
        className="w-full min-h-[412px]  flex flex-col justify-between
         items-center gap-4 p-3 rounded-b-2xl bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100
         dark:from-gray-800 dark:to-gray-700 dark:via-gray-800"
      >
        <div>
          <h3 className="font-bold ">{name}</h3>
          <div>
            <strong>Frontend:</strong>
            {frontend?.map(tech => (
              <span key={tech}>{` ${tech}  |`}</span>
            ))}
          </div>
          <ul className=" flex flex-col gap-2 mt-3">
            {descriptions.map(tech => (
              <li className="flex items-center gap-2" key={tech}>
                <BsCheck2All />
                {t(tech)}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-8">
          <ButtonLink PRIMARY PrimaryUrl={urlGithub} />
          <ButtonLink SecondaryUrl={urlDemo} />
        </div>
      </div>
    </div>
  )
}
