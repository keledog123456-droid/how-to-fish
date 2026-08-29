import type { Metadata } from 'next';
import { Almendra, Nunito_Sans } from 'next/font/google';
import './globals.css';

const almendra = Almendra({ variable: '--font-almendra', subsets: ['latin'], weight: ['400', '700'] });
const nunitoSans = Nunito_Sans({ variable: '--font-nunito-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'How to Fish Wiki | Independent Game Guide',
  description: 'An independent How to Fish fan guide for walkthroughs, island navigation, creatures, lures, and the Bean speedrun.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'How to Fish Wiki',
    description: 'Independent game guide',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'How to Fish Wiki — Independent game guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Fish Wiki',
    description: 'Independent game guide',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${almendra.variable} ${nunitoSans.variable}`}>{children}</body></html>;
}
