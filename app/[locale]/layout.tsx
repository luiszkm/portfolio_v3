import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ThemeProvider } from 'next-themes'
import { Providers } from '../components/Provider'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          
          <Providers>
          <Header />
            {children}<Footer />
            </Providers>
          
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
