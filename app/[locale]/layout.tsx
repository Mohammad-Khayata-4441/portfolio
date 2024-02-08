import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google'
import Providers from '../components/Providers';
import { locales } from '@/i18n';
import Navbar from '@/app/components/Navbar'
import LightsGenerator from '@/app/components/LightsGenerator'
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })



export default async function LocaleLayout({ children, params: { locale } }: any) {
  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} className='dark'>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          <Navbar/>

          {children}
        </Providers>
        {/* <Image src='/freePalastine.png' className='fixed top-5 right-5' alt='free palastine' height={40} width={70}></Image> */}
        <LightsGenerator></LightsGenerator>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}