import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import Layout from '@/layouts/Layout';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

import ThemeProvider from '@/theme/ThemeProvider';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  fallback: ['Arial', 'Verdana', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Init App',
  description: 'Generated by Wiut students',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={inter.className}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="sticky top-0 z-30 flex h-[94px] items-center justify-between bg-white">
              <Header />
            </div>
            <Layout>
              {children}
              <Analytics />
              <SpeedInsights />
            </Layout>

            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
