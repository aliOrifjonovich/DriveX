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
  title: 'DriveX - Car Rentals marketplace in Uzbekistan & Central Asia',
  description:
    'Find the best car rentals in Uzbekistan, Kazakhstan, Kyrgyzstan, and Central Asia. Rent a car easily with DriveX – the #1 car rental marketplace for tourists and locals.',
  keywords:
    'car rental Uzbekistan, rent a car in Tashkent, best car rentals Central Asia, car hire Samarkand, Kazakhstan car rentals, Kyrgyzstan car hire, tourist car rental Uzbekistan, cheap car rental Tashkent',
  openGraph: {
    title: 'DriveX - Best Car Rentals in Uzbekistan & Central Asia',
    description:
      'Looking for the best car rental in Uzbekistan and Central Asia? DriveX offers affordable, reliable, and tourist-friendly car hire services across the region.',
    url: 'https://www.drivex.uz',
    type: 'website',
  },
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
