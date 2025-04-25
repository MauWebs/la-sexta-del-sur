import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'La Sexta Del Sur',
  description: 'La sexta del sur',
  icons: {
    icon: '/favicon.ico',
  },
};

const ttCommonsRegular = localFont({
  src: '../../public/fonts/TT-COMMONS/TTCommons-Regular.ttf',
  variable: '--font-tt-commons-regular',
});

const ttCommonsMedium = localFont({
  src: '../../public/fonts/TT-COMMONS/TTCommons-Medium.ttf',
  variable: '--font-tt-commons-medium',
});

const ttCommonsDemiBold = localFont({
  src: '../../public/fonts/TT-COMMONS/TTCommons-DemiBold.ttf',
  variable: '--font-tt-commons-demibold',
});

const ttCommonsBold = localFont({
  src: '../../public/fonts/TT-COMMONS/TTCommons-Bold.ttf',
  variable: '--font-tt-commons-bold',
});

const publicoHeadlineBold = localFont({
  src: '../../public/fonts/Publico-Headline-Web/Publico Headline Web Bold.ttf',
  variable: '--font-publico-headline-bold',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body className={`
        ${ttCommonsRegular.className} 
        ${ttCommonsMedium.variable} 
        ${ttCommonsDemiBold.variable}
        ${ttCommonsBold.variable}
        ${publicoHeadlineBold.variable}
      `}>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
};