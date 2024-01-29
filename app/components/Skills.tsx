import { useTranslations } from 'next-intl'

export function Skills() {
  const t = useTranslations('Index')
  const th = useTranslations('Header')

  return (
    <div
      className="md:h-[424px]  w-full flex items-center justify-center rounded-2xl p-2 md:mt-14 bg-gradient-to-br 
    from-purple-800 via-Fuchsia-800 to-pink-700"
    >
      <section
        className=" h-full w-full rounded-2xl p-4 bg-white flex 
        items-center flex-row gap-1
      dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:via-gray-800"
      >
        <div className='w-full h-full bg-white'>
          <div>
            
          </div>
        </div>
        <div className='w-full h-full bg-white'>

        </div>
      
      </section>
    </div>
  )
}
