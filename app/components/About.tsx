import {useTranslations} from 'next-intl';

export function About() {
  const  t  = useTranslations("Index");

  return (
    <div className="md:h-[424px] w-full flex items-center justify-center rounded-2xl p-2 md:mt-14 bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-200
    dark:from-purple-800 dark:via-Fuchsia-800 dark:to-pink-700">

      <section className=" h-full w-full rounded-2xl p-4 bg-white 
      dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:via-gray-800">
        <h2 className="font-extrabold mb-5 text-xl bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 bg-clip-text text-transparent">{t("about")}</h2>

        <div className="grid gap-4 ">
          <p>
            {t("presentation")}
          </p>

          <p>
            {t("pretense")}
          </p>
        </div>

      </section>
    </div>

  )

}