import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Providers } from '../../components/Provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import '../globals.css'
import { Metadata } from 'next'
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}
export const metadata: Metadata = {
  title: 'Home',
  authors: [{ name: 'Luis Soares' ,url: 'http://devsoares.com'}],
  keywords: ['Portfolio', 'Dev', 'Web', 'Developer', 'Software', 'Engineer'],
  
  description: 'Portfolio desenvolvedor web'

}
interface ILocaleLayout {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: ILocaleLayout) {
  let messages
  try {
    messages = (
      await import(`../../public/messages/locales/${locale}/index.json`)
    ).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
     
      <body
        className="
        bg-gray-100
          dark:bg-black
        m-auto
       flex
       flex-col
       max-w-screen-xl
       justify-between 
       items-center
       min-h-screen"
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}

            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
