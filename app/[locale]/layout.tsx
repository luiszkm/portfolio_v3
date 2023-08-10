import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Providers } from '../components/Provider'
import '../globals.css'
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
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
      <body className="flex flex-col items-center min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
