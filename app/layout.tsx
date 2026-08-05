import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { Providers } from './providers';
import { site } from '@/data/site';
import { profile } from '@/data/profile';

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.fullName} — ${site.name.split('—')[1]?.trim() ?? 'Portfolio'}`,
    template: `%s · ${profile.fullName}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.fullName, url: site.url }],
  creator: profile.fullName,
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    title: `${profile.fullName} — Portfolio`,
    description: site.description,
    siteName: profile.fullName,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: profile.fullName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.fullName} — Portfolio`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: site.themeColor },
  ],
  width: 'device-width',
  initialScale: 1,
};

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  url: site.url,
  jobTitle: 'Product manager, consultant and software engineer',
  address: { '@type': 'PostalAddress', addressLocality: profile.location },
  email: `mailto:${profile.email}`,
  description: profile.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-foreground focus:text-background"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
