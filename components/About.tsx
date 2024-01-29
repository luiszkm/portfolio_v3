import {useTranslations} from 'next-intl';

export function About() {
  const  t  = useTranslations("Index");

  return (
    <div className="md:h-[424px] w-full flex items-center justify-center rounded-2xl p-1 md:mt-14 bg-gradient-to-br from-purple-800 via-Fuchsia-800 to-pink-700">

      <section className=" h-full w-full rounded-2xl p-4
      bg-gradient-to-br from-gray-200 via-gray-100 to-gray-100
       dark:from-gray-800 dark:to-gray-700 dark:via-gray-800">

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