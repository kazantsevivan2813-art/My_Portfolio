import '@/lib/ui/css/main.css';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import appleTouchIcon from '~/public/meta/apple-touch-icon.png';
import favicon from '~/public/meta/favicon.ico';
import faviconSvg from '~/public/meta/favicon.svg';
import ogImage from '~/public/meta/og-image.png';
import { Header, PageContainer } from '@/components';
import { DESCRIPTION, FULL_NAME, SITE_URL } from '@/config';
import { getMetadata } from '@/metadata';
import { ThemeProvider } from './_components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = getMetadata({
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${FULL_NAME}`,
    default: FULL_NAME,
  },
  description: DESCRIPTION,
  icons: [
    { rel: 'icon', url: favicon.src, sizes: '32x32' },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    { rel: 'icon', url: faviconSvg.src, type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: appleTouchIcon.src },
  ],
  image: {
    url: ogImage.src,
    type: 'image/png',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <meta
          property="og:image"
          content="https://gungho0619.app/meta/og-image.png"
        /> */}
        <meta property="og:url" content="https://gungho0619.vercel.app/" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <Header />
          <PageContainer>{children}</PageContainer>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
